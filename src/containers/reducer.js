import { combineReducers } from 'redux';

// Reducers
import { reducer as plans } from './Plans';

const containersReducer = combineReducers({
  plans
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return containersReducer(state, action);
  }
};
