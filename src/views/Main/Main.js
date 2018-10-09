import React from 'react';
import { Switch, Route } from 'react-router-dom';
import url from 'url';

// Views
import Website from 'views/Website';

import styles from './Main.scss';

const Main = ({ match }) => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      <div className={styles.HeaderContainer}>
        Header
      </div>

      <div className={styles.HeaderShadow} />
    </div>

    <div className={styles.Container}>
      <Switch>
        <Route path={url.resolve(match.url, '/:websiteId')} component={Website} />
      </Switch>
    </div>
  </div>
);

export default Main;
