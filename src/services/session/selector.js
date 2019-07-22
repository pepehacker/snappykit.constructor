import { get } from 'lodash';

export const getUserEmail = (state: Object): string =>
  get(state, 'services.session.user.email');

export const getUserId = (state: Object): number =>
  get(state, 'services.session.user.id', 0);

export const getSubscription = (state: Object): Object =>
  get(state, 'services.session.user.subscription');

export const getSubscriptionLimit = (state: Object): number =>
  get(state, 'services.session.user.subscription.limit', 0);

export const isEnded = (state: Object): number =>
  get(state, 'services.session.user.subscription.isEnd');

export const isPro = (state: Object): number =>
  get(state, 'services.session.user.subscription.isPro');
