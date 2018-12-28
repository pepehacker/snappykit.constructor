import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import url from 'url';

// Components
import Header from './components/Header';

// Views
import Website from 'views/Website';

import styles from './Main.scss';

const Main = ({ isFetching, match }) => (
  <div className={styles.Root}>
    {isFetching ? (
      <div className={styles.Loading}>
        Loading
      </div>
    ) : (
      <div className={styles.Wrapper}>
        <Header />

        <div className={styles.Container}>
          <Switch>
            <Route path={url.resolve(match.url, '/:websiteId')} component={Website} />
          </Switch>
        </div>
      </div>
    )}
  </div>
);

const mapStateToProps = ({ views }) => ({
  isFetching: get(views, 'main.isFetching'),
});

export default connect(mapStateToProps)(Main);
