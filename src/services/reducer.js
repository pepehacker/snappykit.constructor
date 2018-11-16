import { combineReducers } from 'redux';

// Reducers
import modals from './modals';
import palette from './palette';

const servicesReducer = combineReducers({
  modals,
  palette,
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return servicesReducer(state, action);
  }
};
