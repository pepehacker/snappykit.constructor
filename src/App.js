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
    {!user && (
      <Spinner title="Fetching user..." />
    )}

    {user && (
      <Fragment>
        <Switch>
          <Route path={url.resolve(match.url, '/sandbox')} component={Sandbox} />
          <Route path={url.resolve(match.url, '/')} component={Main} />
        </Switch>

        <Plans />
      </Fragment>
    )}
  </div>
);

const mapStateToProps = ({ services }) =>
  get(services, 'session');

export default compose(
  connect(mapStateToProps, { fetchProfile }),
  lifecycle({
    componentDidMount() {
      const { fetchProfile, token } = this.props;

      if (token) {
        fetchProfile(2036);
      }
    },
  }),
)(App);
