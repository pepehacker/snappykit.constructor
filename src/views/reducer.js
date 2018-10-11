import { combineReducers } from 'redux';

// Reducers
import { reducer as editor } from './Editor';

const viewsReducer = combineReducers({
  editor,
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return viewsReducer(state, action);
  }
};
