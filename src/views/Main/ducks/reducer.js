// Entities
import {
  FETCH_WEBSITES_REQUEST,
  FETCH_WEBSITES_SUCCESS,
  FETCH_WEBSITES_FAILURE,
} from 'entities/websites/types';

const initialValues = {
  isFetching: true,
}

export default (state = initialValues, action: Object) => {
  switch (action.type) {
    case FETCH_WEBSITES_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_WEBSITES_SUCCESS:
    case FETCH_WEBSITES_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
