import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

// Views
import App from './App';

// Utils
import * as serviceWorker from './utils/serviceWorker';
import createStore from './store';

const history = createBrowserHistory();
const store = createStore(history);

// eslint-disable-next-line
Paddle.Setup({ vendor: 21028 });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/" />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
