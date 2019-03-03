import { get } from 'lodash';

// Selector
import { getWebsiteById } from '../selector';

// Services
import { getUserId } from 'services/session';

// Types
import {
  // Delete
  DELETE_WEBSITE_SUCCESS,

  // Save
  SAVE_WEBSITE_REQUEST,
  SAVE_WEBSITE_SUCCESS,
  SAVE_WEBSITE_FAILURE,
} from '../types';

const createWebsite = (websiteId: number|string, website: Object): Function =>
  (dispatch: Function, getState: Function, { api, history }) => {
    const state = getState();

    return api('websites.create', {
      ...website,
      domain: null,
      json: 'string',
      store_id: `${get(website, 'storeId')}${getUserId(state)}`,
    })
      .then(({ data }): void => {
        const appId = get(data, 'id');

        if (appId) {
          api('websites.createTemplate', {
            ...website,
            app_id: appId,
            json: JSON.stringify(get(website, 'data')),
            template_id: get(website, 'templateId'),
          })
            .then(({ data }): void => {
              const id = get(data, 'id');

              dispatch({ type: DELETE_WEBSITE_SUCCESS, websiteId: 'new' });
              dispatch({ type: SAVE_WEBSITE_SUCCESS, websiteId: id, payload: { ...website, appId, id }});
              history.push(`/launch/:${id}`);
            })
            .catch((error: Object) =>
              dispatch({ type: SAVE_WEBSITE_FAILURE, error: get(error, 'message')}));
        }
      })
      .catch((error: Object) =>
        dispatch({ type: SAVE_WEBSITE_FAILURE, error: get(error, 'message')}));
  }


const updateWebsite = (websiteId: number|string, website: Object): Function =>
  (dispatch: Function, getState: Function, { api }) =>
    api([
      {
        method: 'websites.update',
        params: {
          ...website,
          appId: get(website, 'appId'),
          json: 'string',
        },
      },
      {
        method: 'websites.updateTemplate',
        params: {
          ...website,
          json: JSON.stringify(get(website, 'data')),
        },
      },
    ])
      .then((): void =>
        dispatch({ type: SAVE_WEBSITE_SUCCESS, websiteId, payload: website }))
      .catch((error: Object) =>
        dispatch({ type: SAVE_WEBSITE_FAILURE, error: get(error, 'message')}));

export default (websiteId: number|string): Function =>
  (dispatch: Function, getState: Function, { api, history }) => {
    const state: Object = getState();

    const method = websiteId === 'new'
      ? createWebsite
      : updateWebsite;

    dispatch({ type: SAVE_WEBSITE_REQUEST, websiteId });
    dispatch(method(websiteId, getWebsiteById(state, websiteId)));
  }
