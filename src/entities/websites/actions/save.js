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
  SAVE_WEBSITE_FAILURE
} from '../types';

const createWebsite = (
  websiteId: number | string,
  website: Object
): Function => (dispatch: Function, getState: Function, { api, history }) => {
  const state = getState();

  return api('websites.create', {
    ...website,
    domain: null,
    json: JSON.stringify({
      ...get(website, 'data', {}),
      templateId: get(website, 'templateId', 1)
    }),
    store_id: `${get(website, 'storeId')}${getUserId(state)}`
  })
    .then(({ data }): void => {
      const id = get(data, 'id');

      dispatch({ type: DELETE_WEBSITE_SUCCESS, websiteId: 'new' });
      dispatch({
        type: SAVE_WEBSITE_SUCCESS,
        websiteId: id,
        payload: {
          ...website,
          id,
          domain: data.domain,
          domain_free: data.domain_free
        }
      });

      history.replace(`/launch/:${id}`);
    })
    .catch((error: Object) =>
      dispatch({
        type: SAVE_WEBSITE_FAILURE,
        error: get(error, 'message'),
        websiteId: 'new'
      })
    );
};

const updateWebsite = (
  websiteId: number | string,
  website: Object
): Function => (dispatch: Function, getState: Function, { api, history }) =>
  api('websites.update', {
    ...website,
    appId: websiteId,
    json: JSON.stringify({
      ...get(website, 'data', {}),
      templateId: get(website, 'templateId', 1)
    })
  })
    .then((): void => {
      dispatch({ type: SAVE_WEBSITE_SUCCESS, websiteId, payload: website });
      history.replace(`/launch/:${websiteId}`);
    })
    .catch((error: Object) =>
      dispatch({ type: SAVE_WEBSITE_FAILURE, error: get(error, 'message') })
    );

export default (websiteId: number | string): Function => (
  dispatch: Function,
  getState: Function,
  { api, history }
) => {
  const state: Object = getState();

  const method = websiteId === 'new' ? createWebsite : updateWebsite;

  dispatch({ type: SAVE_WEBSITE_REQUEST, websiteId });
  dispatch(method(websiteId, getWebsiteById(state, websiteId)));
};
