import React from 'react';
import { Route, Switch } from 'react-router-dom';
import url from 'url';

// Views
import Main from './views/Main';

import styles from './App.scss';

const App = ({ match }) => (
  <div className={styles.Root}>
    <Switch>
      <Route path={url.resolve(match.url, '/')} component={Main} />
    </Switch>
  </div>
);

export default App;
