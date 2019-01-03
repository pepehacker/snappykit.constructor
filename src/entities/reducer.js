import { combineReducers } from 'redux';

// Reducers
import template from './template';

const modelsReducer = combineReducers({
  template,
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return modelsReducer(state, action);
  }
};
