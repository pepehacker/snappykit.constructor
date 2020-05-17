// Entities
import { VIEW } from 'template';

// Types
import { SET_BUSY, SET_VIEW } from './types';

const initialState = {
  isBusied: true,
  view: VIEW.DESKTOP
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    case SET_BUSY:
      return {
        ...state,
        isBusied: action.busy
      };
    case SET_VIEW:
      return {
        ...state,
        view: action.view
      };
    default:
      return state;
  }
};
