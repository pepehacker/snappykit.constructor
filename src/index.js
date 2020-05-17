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

process.env.NODE_ENV === 'development' &&
  localStorage.setItem(
    'token',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDM2LCJlbWFpbCI6InZhbnlhMDk1QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidmFueWEwOTVAZ21haWwuY29tIiwiZXhwIjoxNTc1NTM5MDgyfQ.ulgcg_4II44M37lUh7CVEa7I4XhTrvfsDIhxKZcQOLg'
  );

const history = createBrowserHistory({
  basename: '/kit'
});
const store = createStore(history);

// eslint-disable-next-line
Paddle.Setup({ vendor: 21028 });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
