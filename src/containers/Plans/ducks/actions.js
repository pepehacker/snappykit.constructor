// @flow
import { SET_PERIOD, SET_PRICE } from './types';

export const setPeriod: Function = (period: string): Object => ({
  type: SET_PERIOD,
  period,
});

export const setPrice: Function = (price: string): Object => ({
  type: SET_PRICE,
  price,
});
