// Types
import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from 'services/session';

const initialValues = {
  isFetching: false,
}

export default (state = initialValues, action: Object) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_PROFILE_SUCCESS:
    case FETCH_PROFILE_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
