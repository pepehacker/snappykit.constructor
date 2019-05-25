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

const history = createBrowserHistory({
  basename: '/kit',
});
const store = createStore(history);

localStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTA2OTI3MjcsInVzZXJuYW1lIjoidmFueWEwOTVAZ21haWwuY29tIiwidXNlcl9pZCI6MjAzNiwiZW1haWwiOiJ2YW55YTA5NUBnbWFpbC5jb20ifQ.dK9JSjm4aKUBt9w4z__q7SRmVBhAoOVfYytgH3hrmsw',
);

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
