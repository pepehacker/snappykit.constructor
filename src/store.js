import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// Api
import api from 'api';
import * as schema from 'api/schema';

// Middleware
import thunkMiddleware from 'redux-thunk';

// Reducers
import { reducer as form } from 'redux-form';
import entities from 'entities/reducer';
import services from 'services/reducer';
import views from 'views/reducer';

const reducer = combineReducers({
  entities,
  form,
  services,
  views,
});

export default (history: Object) => createStore(reducer, compose(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ api, schema }),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
