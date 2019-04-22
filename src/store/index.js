// @flow
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// Api
import api from 'api';
import * as schema from 'api/schema';

// Middleware
import formMiddleware from './formMiddleware';
import thunkMiddleware from 'redux-thunk';

// Reducers
import { reducer as form } from 'redux-form';
import containers from 'containers/reducer';
import entities from 'entities/reducer';
import services from 'services/reducer';
import views from 'views/reducer';

const composeEnhancers =
  // eslint-disable-next-line
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducer = combineReducers({
  containers,
  entities,
  form,
  services,
  views,
});

export default (history: Object) =>
  createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(formMiddleware, thunkMiddleware.withExtraArgument({ api, history, schema })),
    ),
  );
