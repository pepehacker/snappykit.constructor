import { get } from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import url from 'url';

// Components
import Spinner from 'components/Spinner';

// Containers
import Plans from 'containers/Plans';

// Ducks
import { fetchProfile } from 'services/session';

// Views
import Main from 'views/Main';
import Sandbox from 'views/Sandbox';

import styles from './App.scss';

const App = ({ match, user }) => (
  <div className={styles.Root}>
    {!user && <Spinner title="Fetching user..." />}

    {user && (
      <Fragment>
        <Switch>
          <Route component={Sandbox} path={url.resolve(match.url, '/sandbox')} />
          <Route component={Main} path={url.resolve(match.url, '/')} />
        </Switch>

        <Plans />
      </Fragment>
    )}
  </div>
);

const mapStateToProps = ({ services }) => get(services, 'session');

export default compose(
  connect(
    mapStateToProps,
    { fetchProfile },
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchProfile();
    },
  }),
)(App);
