import { get } from 'lodash';
import { normalize } from 'normalizr';

// Entities
import { UPDATE_ENTITIES } from 'entities/types';

// Types
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from './types';

export const fetchCountries = (): func => (dispatch: func, getState: func, { api, schema }) => {
  dispatch({ type: FETCH_COUNTRIES_REQUEST });

  return api('countries.get')
    .then(({ data }) => {
      const transformedData = data.map(({ alpha2, name }) => ({ id: alpha2, name }));
      const normalizedData = normalize(transformedData, [schema.country]);

      dispatch({ type: UPDATE_ENTITIES, data: normalizedData });
      dispatch({ type: FETCH_COUNTRIES_SUCCESS });
    })
    .catch((error: Object) =>
      dispatch({ type: FETCH_COUNTRIES_FAILURE, error: get(error, 'message')}));
};
