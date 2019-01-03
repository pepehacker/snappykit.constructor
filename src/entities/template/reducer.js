import {
  SET_TEMPLATE_DATA,
  SET_TEMPLATE_ID,
} from './types';

const initialValues = {
  id: null,
  data: null,
};

export default (state = initialValues, action: Object) => {
  switch (action.type) {
    case SET_TEMPLATE_DATA:
      return { ...state, data: {
        ...state.data,
        ...action.data,
      }};
    case SET_TEMPLATE_ID:
      return { ...state, id: action.id };
    default:
      return state;
  }
};
