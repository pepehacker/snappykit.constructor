import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import url from 'url-join';

// Components
import Devices from './components/Devices';
import View from './components/View';

// Views
import Templates from 'views/Templates';

import styles from './Editor.scss';

const Editor = ({ match }) => (
  <div className={styles.Root}>
    <div className={styles.Container}>
      <div className={styles.View}>
        <View />
      </div>

      <div className={styles.Devices}>
        <Devices />
      </div>
    </div>

    <div className={styles.Sidebar}>
      <Switch>
        <Route path={url(match.url, '/templates')} component={Templates} />
      </Switch>
    </div>
  </div>
);

Editor.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Editor;
