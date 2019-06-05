import { get } from 'lodash';

export const getUserId = (state: Object): number => get(state, 'services.session.user.id', 0);

export const getSubscriptionLimit = (state: Object): number =>
  get(state, 'services.session.user.subscription.limit', 0);

export const isPro = (state: Object): number =>
  get(state, 'services.session.user.subscription.isPro');
