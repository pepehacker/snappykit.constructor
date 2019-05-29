import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

// Template
import { Sandbox } from 'template';

// Utils
import * as serviceWorker from './utils/serviceWorker';

const history = createBrowserHistory();

// eslint-disable-next-line
Paddle.Setup({ vendor: 21028 });

ReactDOM.render(
  <Router history={history}>
    <Route component={Sandbox} path="/" />
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
