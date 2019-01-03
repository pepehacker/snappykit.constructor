import { combineReducers } from 'redux';

// Reducers
import { reducer as main } from './Main';
import { reducer as editor } from './Editor';
import { reducer as screenshots } from './Screenshots';
import { reducer as templates } from './Templates';

const viewsReducer = combineReducers({
  editor,
  main,
  screenshots,
  templates,
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return viewsReducer(state, action);
  }
};
