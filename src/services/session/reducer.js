import { LOGOUT, SET_USER } from './types';

const initialState = {
  user: null
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, user: null };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
