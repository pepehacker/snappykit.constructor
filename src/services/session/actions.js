import { get, isEmpty } from 'lodash';

// Constants
import {
  SUBSCRIPTION_AGENCY,
  SUBSCRIPTION_AGENCY_LIMIT,
  SUBSCRIPTION_AGENCY_LIST,
  SUBSCRIPTION_BASIC,
  SUBSCRIPTION_BASIC_LIMIT,
  SUBSCRIPTION_BASIC_LIST,
  SUBSCRIPTION_LITE,
  SUBSCRIPTION_LITE_LIMIT,
  SUBSCRIPTION_PRO,
  SUBSCRIPTION_PRO_LIMIT,
  SUBSCRIPTION_PRO_LIST
  // SUBSCRIPTION_LIST
} from './constants';

// Types
import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  LOGOUT,
  SET_PRO,
  SET_USER
} from './types';

export const fetchProfile = (id: number) => (
  dispatch: func,
  getState: func,
  { api }
) => {
  dispatch({ type: FETCH_PROFILE_REQUEST });

  api([{ method: 'profile.get' }, { method: 'subscriptions.get' }])
    .then((response) => {
      const profile = get(response, '0.data', {});
      const subscriptions = get(response, '1.data.response', []);

      if (!isEmpty(profile)) {
        const subscription: Object = subscriptions.filter(
          ({ id }) => id === get(profile, 'subscription_plan_id', 0)
        )[0];

        const isPayed = profile.is_payed;

        const subscriptionId: string = get(subscription, 'id');
        const name =
          SUBSCRIPTION_BASIC_LIST.indexOf(subscriptionId) > -1
            ? SUBSCRIPTION_BASIC
            : SUBSCRIPTION_PRO_LIST.indexOf(subscriptionId) > -1
            ? SUBSCRIPTION_PRO
            : SUBSCRIPTION_AGENCY_LIST.indexOf(subscriptionId)
            ? SUBSCRIPTION_AGENCY
            : SUBSCRIPTION_LITE;

        let limit = SUBSCRIPTION_LITE_LIMIT;

        if (isPayed) {
          switch (name) {
            case SUBSCRIPTION_AGENCY:
              limit = SUBSCRIPTION_AGENCY_LIMIT;
              break;
            case SUBSCRIPTION_BASIC:
              limit = SUBSCRIPTION_BASIC_LIMIT;
              break;
            case SUBSCRIPTION_PRO:
              limit = SUBSCRIPTION_PRO_LIMIT;
              break;
            default:
              break;
          }
        }

        const user: Object = {
          id: get(profile, 'id'),
          email: get(profile, 'email'),
          subscription: {
            id: subscriptionId,
            cancelUrl: get(profile, 'cancel_url'),
            expireDate: get(profile, 'next_bill_date'),
            name,
            limit,
            period: get(subscription, 'billing_type') === 'year' ? 365 : 30,
            isEnded: !isPayed,
            isPro: get(profile, 'is_payed'), // !isEnded && SUBSCRIPTION_LIST.indexOf(subscriptionId) > -1,
            updateUrl: get(profile, 'update_url')
          }
        };

        dispatch({ type: SET_USER, user });
        dispatch({ type: FETCH_PROFILE_SUCCESS });
      }
    })
    .catch((error: Object) => {
      const status = get(error, 'response.status', 404);
      status === 401 && window.location.replace('http://snappykit.com');
      dispatch({ type: FETCH_PROFILE_FAILURE, error: get(error, 'message') });
    });
};

export const setPro = () => ({
  type: SET_PRO
});

export const logout: Function = () => {
  localStorage.removeItem('token');
  window.location.reload();
  return { type: LOGOUT };
};
