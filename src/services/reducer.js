import { combineReducers } from 'redux';

// Reducers
import modals from './modals';
import palette from './palette';
import session from './session';

const servicesReducer = combineReducers({
  modals,
  palette,
  session
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return servicesReducer(state, action);
  }
};
