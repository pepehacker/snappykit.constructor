import { LOGOUT, SET_PRO, SET_SUBSCRIPTION, SET_USER } from './types';

const initialState = {
  user: null
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, user: null };
    case SET_PRO:
      return {
        ...state,
        user: {
          ...state.user,
          subscription: { ...state.user.subscription, isPro: true }
        }
      };
    case SET_SUBSCRIPTION:
      return {
        ...state,
        user: {
          ...state.user,
          subscription: action.payload
        }
      };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
