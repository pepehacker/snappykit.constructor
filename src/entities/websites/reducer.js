import { get, omit } from 'lodash';

// Types
import {
  CREATE_WEBSITE,

  // Delete
  DELETE_WEBSITE_REQUEST,
  DELETE_WEBSITE_SUCCESS,
  DELETE_WEBSITE_FAILURE,

  SET_TEMPLATE_ID,

  UPDATE_WEBSITE,
  UPDATE_WEBSITE_SECTION,
} from './types';

export default (state = {}, action: Object): Object => {
  const sectionId = get(action, 'sectionId');
  const websiteId = get(action, 'websiteId');
  const website = get(state, websiteId);

  switch (action.type) {
    // Create
    case CREATE_WEBSITE:
      return {
        ...state,
        'new': {
          ...action.payload,
          id: 'new',
          isSupported: true,
        },
      };

    // Delete
    case DELETE_WEBSITE_REQUEST:
      return {
        ...state,
        [websiteId]: {
          ...website,
          isFetching: true,
        },
      };
    case DELETE_WEBSITE_SUCCESS:
      return omit(state, websiteId);
    case DELETE_WEBSITE_FAILURE:
      return {
        ...state,
        [websiteId]: {
          ...website,
          isFetching: false,
        }
      };

    case SET_TEMPLATE_ID:
      return {
        ...state,
        [websiteId]: {
          ...website,
          data: action.payload,
          templateId: action.templateId,
        },
      };
    case UPDATE_WEBSITE:
      return {
        ...state,
        [websiteId]: {
          ...website,
          ...action.payload,
        },
      };
    case UPDATE_WEBSITE_SECTION:
      return {
        ...state,
        [websiteId]: {
          ...website,
          data: {
            ...get(website, 'data'),
            [sectionId]: {
              ...get(website, `data.${sectionId}`),
              ...action.payload,
            },
          },
        },
      };
    default:
      return state;
  }
};
