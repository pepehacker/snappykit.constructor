import axios from 'axios';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import url from 'url';

// Ducks
import { fetchProfile } from 'services/session';

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

const mapStateToProps = ({ services }) =>
  get(services, 'session');

export default compose(
  connect(mapStateToProps, { fetchProfile }),
  lifecycle({
    componentDidMount() {
      const { fetchProfile, token, user } = this.props;

      if (token) {
        axios.defaults.headers.common.Authorization = `JWT ${token}`;
        fetchProfile(2036);
      }
    },
  }),
)(App);
