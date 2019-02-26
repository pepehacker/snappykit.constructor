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

export default (websiteId: number|string): func =>
  (dispatch: func, getState: func, { api, history }) => {
    const state = getState();
    const isNew = websiteId === 'new';
    const website = getWebsiteById(state, websiteId);

    dispatch({ type: SAVE_WEBSITE_REQUEST, websiteId });

    return api(isNew ? 'websites.create' : 'websites.update', isNew ? {
      content: '',
      description: get(website, 'description', ''),
      domain: null,
      json: 'string',
      provider: get(website, 'storeProvider', 1),
      store_id: `${get(website, 'storeId', 0)}${getUserId(state)}`,
      title: get(website, 'title', ''),
    } : { appId: get(website, 'appId'), json: 'string '})
      .then(({ data }) => {
        const appId = get(data, 'id');

        if (appId) {
          api(isNew ? 'websites.createTemplate' : 'websites.updateTemplate', isNew ? {
            app_id: appId,
            description: get(website, 'description', ''),
            is_active: true,
            json: JSON.stringify(get(website, 'data', '{}')),
            template_id: get(website, 'templateId'),
            title: get(website, 'title', ''),
          } : { websiteId: get(website, 'id')})
            .then(({ data }) => {
              const id = get(data, 'id');
              dispatch({ type: SAVE_WEBSITE_SUCCESS, websiteId: id, payload: { ...website, appId, id }});

              if (isNew) {
                dispatch({ type: DELETE_WEBSITE_SUCCESS, websiteId: 'new' });
                history.push(`/launch/:${id}`);
              }
            })
            .catch((error: Object) =>
              dispatch({ type: SAVE_WEBSITE_FAILURE, error: get(error, 'message')}));
        }
      })
      .catch((error: Object) =>
        dispatch({ type: SAVE_WEBSITE_FAILURE, error: get(error, 'message')}));
  }
