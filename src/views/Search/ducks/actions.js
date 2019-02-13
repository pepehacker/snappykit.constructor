import { get } from 'lodash';

// Constants
import { STORE_APPLE_ID } from './constants';

// Types
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './types';

export const search = ({ store, ...values }): func => (dispatch: func, getState: func, { api, schema }) => {
  dispatch({ type: SEARCH_REQUEST });

  return api('search.get', { store, ...values })
    .then(({ data }) => {
      const results = store === STORE_APPLE_ID
        ? get(data,  'results' : '', [])
        : data;

      const formatedData = results.map((result: Object) => ({
        description: store === STORE_APPLE_ID
          ? get(result, 'artistName')
          : get(result, 'id'),
        id: store === STORE_APPLE_ID
          ? get(result, 'bundleId')
          : get(result, 'id'),
        logo: store === STORE_APPLE_ID
          ? get(result, 'artworkUrl512')
          : get(result, 'logo'),
        title: store === STORE_APPLE_ID
          ? get(result, 'trackName')
          : get(result, 'title'),
      }));

      dispatch({ type: SEARCH_SUCCESS, result: formatedData });
    })
    .catch((error: Object) =>
      dispatch({ type: SEARCH_FAILURE, error: get(error, 'message')}))
};
