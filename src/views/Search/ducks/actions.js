import { get } from 'lodash';
import { formValueSelector } from 'redux-form';

// Constants
import { SEARCH_FORM_ID, STORE_APPLE_ID } from './constants';

// Entities
import { createWebsite } from 'entities/websites';

// Selector
import { getResultById } from './selector';

// Types
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SET_QUERY
} from './types';

const selector = formValueSelector(SEARCH_FORM_ID);

export const selectApp = (appId: string): Function => (
  dispatch: Function,
  getState: Function,
  { api, history }
): void => {
  dispatch({ type: SEARCH_REQUEST });

  const state = getState();

  const country = selector(state, 'country');
  const result = getResultById(state, appId);

  const isAppStore = get(result, 'provider') === STORE_APPLE_ID;

  return api(!isAppStore && 'store.getPlayData', {
    country: country === 'US' ? 'EN' : country,
    id: appId
  }).then(({ data }): void => {
    const newWebsite = {
      copyright: isAppStore ? get(result, 'artistName') : get(data, 'company'),
      description: isAppStore
        ? get(result, 'description')
        : get(data, 'content'),
      link: isAppStore ? get(result, 'trackViewUrl') : get(result, 'link'),
      logo: get(result, 'logo'),
      provider: get(result, 'provider'),
      screenshots: isAppStore
        ? get(result, 'screenshotUrls')
        : get(data, 'images'),
      storeId: isAppStore ? get(result, 'trackId') : appId,
      title: get(result, 'title')
    };

    dispatch({ type: SEARCH_SUCCESS });
    dispatch(createWebsite(newWebsite));
  });
  // .catch((error: Object) =>
  //   dispatch({ type: SEARCH_FAILURE, error: get(error, 'message')}));
};

export const search = ({ store, ...values }): func => (
  dispatch: func,
  getState: func,
  { api, schema }
) => {
  dispatch({ type: SEARCH_REQUEST });

  return api('store.search', { store, ...values })
    .then(({ data }) => {
      const query = get(values, 'name');
      const results =
        store === STORE_APPLE_ID ? get(data, 'results', []) : data;

      const formatedData = results.map((result: Object) => ({
        ...result,
        description:
          store === STORE_APPLE_ID
            ? get(result, 'description')
            : get(result, 'id'),
        id:
          store === STORE_APPLE_ID
            ? get(result, 'bundleId')
            : get(result, 'id'),
        logo:
          store === STORE_APPLE_ID
            ? get(result, 'artworkUrl512')
            : get(result, 'logo'),
        provider: store,
        title:
          store === STORE_APPLE_ID
            ? get(result, 'trackName')
            : get(result, 'title')
      }));

      dispatch({ type: SEARCH_SUCCESS, query, result: formatedData });
    })
    .catch((error: Object) =>
      dispatch({ type: SEARCH_FAILURE, error: get(error, 'message') })
    );
};

export const setQuery = (query: string): Object => ({ type: SET_QUERY, query });
