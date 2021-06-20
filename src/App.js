import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import url from 'url';

// Api
import api from 'api';

// Components
import Spinner from 'components/Spinner';

// Containers
import Plans from 'containers/Plans';

// Ducks
import { fetchProfile, setPro } from 'services/session';

// Template
import { Sandbox } from 'template';

// Views
import Main from 'views/Main';

// Styles
import styles from './App.scss';
import '@fortawesome/fontawesome-pro/css/all.min.css';

const App = ({ fetchProfile, match, setPro, user }) => {
  // Setup
  const MAX_TRY = 10;

  // State
  // eslint-disable-next-line no-unused-vars
  const [, setCounter] = useState(0);
  const [isLoaded, setLoadState] = useState(
    !!window.localStorage.getItem('syncPro')
  );

  // Effects
  useEffect(() => {
    const syncPro = setInterval(() => {
      api({ method: 'profile.get' }).then(({ data }) => {
        setCounter((counter) => {
          if (data.is_payed || counter >= MAX_TRY) {
            clearInterval(syncPro);
            setLoadState(false);

            if (data.is_payed) {
              fetchProfile();
              setPro();
            }

            window.localStorage.removeItem('syncPro');
          }

          return counter + 1;
        });
      });
    }, 1000);
  }, []);

  return (
    <div className={styles.Root}>
      {!user || isLoaded ? (
        <Spinner
          title={isLoaded ? 'Sync subscription...' : 'Fetching user...'}
        />
      ) : (
        <>
          <Switch>
            <Route
              component={Sandbox}
              path={url.resolve(match.url, '/sandbox')}
            />
            <Route component={Main} path={url.resolve(match.url, '/')} />
          </Switch>

          <Plans />
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ services }) => get(services, 'session');

export default compose(
  connect(mapStateToProps, { fetchProfile, setPro }),
  lifecycle({
    componentDidMount() {
      this.props.fetchProfile();
    }
  })
)(App);
