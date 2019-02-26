import { get, isEmpty } from 'lodash';

// Types
import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,

  SET_USER,
} from './types';

export const fetchProfile = (id: number) => (dispatch: func, getState: func, { api }) => {
  dispatch({ type: FETCH_PROFILE_REQUEST });

  api([
    {
      method: 'profile.get',
      params: { id },
    },
    { method: 'subscriptions.get' },
  ])
    .then(response => {
      const profile = get(response, '0.data', {});
      const subscriptions = get(response, '1.data.response', []);

      if (!isEmpty(profile)) {
        const subscription = subscriptions.filter(({ id }) => id === get(profile, 'subscription_plan_id', 0))[0];

        const user = {
          id,
          email: get(profile, 'email'),
          subscription: {
            expireDate: get(profile, 'next_bill_date'),
            name: get(subscription, 'name'),
            limit: subscription ? 3 : 1,
          },
        };

        dispatch({ type: SET_USER, user });
        dispatch({ type: FETCH_PROFILE_SUCCESS });
      }
    })
    .catch((error: Object) =>  dispatch({ type: FETCH_PROFILE_FAILURE }));
};
