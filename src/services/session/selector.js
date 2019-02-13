import { get } from 'lodash';

export const getSubscriptionLimit = (state: Object): number =>
  get(state, 'services.session.user.subscription.limit', 0);
