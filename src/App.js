import React from 'react';
import { Route, Switch } from 'react-router-dom';
import url from 'url';

// Views
import HelloWorld from './views/HelloWorld';

const App = ({ match }) => (
  <div>
    <Switch>
      <Route path={url.resolve(match.url, '/')} component={HelloWorld} />
    </Switch>
  </div>
);

export default App;
