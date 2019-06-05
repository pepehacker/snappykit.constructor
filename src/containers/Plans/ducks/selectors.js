// @flow
import { get } from 'lodash';

export const getPeriod: Function = (state: Object): string => get(state, 'containers.plans.period');
export const getPrice: Function = (state: Object): string => get(state, 'containers.plans.price');
