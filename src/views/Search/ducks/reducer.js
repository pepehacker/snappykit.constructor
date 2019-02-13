// Entities
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from 'entities/countries';

// Types
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './types';

const initialState = {
  appsIsFetching: false,
  countriesIsFetching: false,
  result: [],
};

export default (state = initialState, action: Object): Object => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        countriesIsFetching: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        countriesIsFetching: false,
      }

    case SEARCH_REQUEST:
      return {
        ...state,
        appsIsFetching: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        appsIsFetching: false,
        result: action.result,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        appsIsFetching: false,
      };
    default:
      return state;
  }
}
