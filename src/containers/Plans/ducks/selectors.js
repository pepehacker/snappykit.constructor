// @flow
import { get } from 'lodash';

export const getPrice: Function = (state: Object): string => get(state, 'containers.plans.price');
