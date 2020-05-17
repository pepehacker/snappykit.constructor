import { combineReducers } from 'redux';

// Reducers
import { reducer as main } from './Main';
import { reducer as editor } from './Editor';
import { reducer as search } from './Search';
import { reducer as screenshots } from './Screenshots';

const viewsReducer = combineReducers({
  editor,
  main,
  search,
  screenshots
});

export default (state = {}, action: Object) => {
  switch (action.type) {
    default:
      return viewsReducer(state, action);
  }
};
