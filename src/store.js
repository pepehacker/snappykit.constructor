import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// Api
import api from 'api';

// Middleware
import thunkMiddleware from 'redux-thunk';

// Reducers
import { reducer as form } from 'redux-form';
import services from 'services/reducer';
import views from 'views/reducer';

const reducer = combineReducers({
  form,
  services,
  views,
});

export default (history: Object) => createStore(reducer, compose(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ api }),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
