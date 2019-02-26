import { get } from 'lodash';

// Services
import { closeModal } from 'services/modals';

// Views
import { CONFIRM_MODAL_ID } from 'views/Websites/ducks';

// Types
import {
  DELETE_WEBSITE_REQUEST,
  DELETE_WEBSITE_SUCCESS,
  DELETE_WEBSITE_FAILURE,
} from '../types';

export default ({ appId, id: websiteId }): func =>
  (dispatch: func, getState: func, { api }): Object<Promise> => {
    dispatch({ type: DELETE_WEBSITE_REQUEST, websiteId });
    dispatch(closeModal(CONFIRM_MODAL_ID));

    return websiteId === 'new'
      ? dispatch({ type: DELETE_WEBSITE_SUCCESS, websiteId })
      : api([
          { method: 'websites.deleteTemplate', params: { websiteId }},
          { method: 'websites.delete', params: { appId }},
        ])
          .then((data: Object): void =>
            dispatch({ type: DELETE_WEBSITE_SUCCESS, websiteId }))
          .catch((error: Object): void =>
            dispatch({ type: DELETE_WEBSITE_FAILURE, websiteId, error: get(error, 'message')}));
  };
