import { combineReducers } from 'redux';

// Reducers
import { reducer as editor } from './Editor';
import { reducer as screenshots } from './Screenshots';
import { reducer as templates } from './Templates';
import { reducer as text } from './Text';

const viewsReducer = combineReducers({
  editor,
  screenshots,
  templates,
  text,
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return viewsReducer(state, action);
  }
};
