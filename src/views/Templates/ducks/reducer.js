import {
  SET_CURRENT_TEMPLATE,
} from './types';

const initialState = {
  currentTemplate: 1,
  items: [1, 2, 3, 4],
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    case SET_CURRENT_TEMPLATE:
      return {
        ...state,
        currentTemplate: action.templateId,
      };
    default:
      return state;
  }
};
