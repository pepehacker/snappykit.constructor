// @flow
import { SET_PERIOD, SET_PRICE } from './types';

const initialState = {
  period: null,
  price: null,
};

export default (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case SET_PERIOD:
      return {
        ...state,
        period: action.period,
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.price,
      };
    default:
      return state;
  }
};
