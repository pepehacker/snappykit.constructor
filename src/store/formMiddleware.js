import { actionTypes } from 'redux-form';

const state = {};

export default () => (next) => (action) => {
  switch (action.type) {
    case actionTypes.DESTROY:
      state[action.meta.form] = (state[action.meta.form] || 0) - 1;
      if (state[action.meta.form] <= 0) {
        return next(action);
      }
      // Drop the action
      return false;
    case actionTypes.INITIALIZE:
      state[action.meta.form] = (state[action.meta.form] || 0) + 1;
      return next(action);
    default:
      return next(action);
  }
};
