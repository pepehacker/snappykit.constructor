import { merge } from 'lodash';
import { combineReducers } from 'redux';

// Reducers
import countries from './countries';
import websites from './websites';

// Types
import { UPDATE_ENTITIES } from './types';

const modelsReducer = combineReducers({
  countries,
  websites
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    case UPDATE_ENTITIES:
      return action.force
        ? { ...state, ...action.data.entities }
        : merge({}, state, action.data.entities);
    default:
      return modelsReducer(state, action);
  }
};
