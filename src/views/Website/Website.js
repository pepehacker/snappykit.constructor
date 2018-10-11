import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import url from 'url-join';

// Components
import Menu from './components/Menu';

// Views
import Editor from 'views/Editor';

import styles from './Website.scss';

const Website = ({ match, ...props }) => {
  console.log(match);
  console.log(url(match.url, '/editor'));
  return (
    <div className={styles.Root}>
      <div className={styles.Menu}>
        <Menu />

        <div className={styles.Copyright}>
          © 2018 Snappykit. All rights reserved
        </div>
      </div>

      <div className={styles.Container}>
        <Switch>
          <Route path={url(match.url, '/editor')} component={Editor} />
        </Switch>
      </div>
    </div>
  );
};

Website.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Website;
