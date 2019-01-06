import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import url from 'url-join';

// Components
import Devices from './components/Devices';
import View from './components/View';

// Views
import Icon from 'views/Icon';
import Screenshots from 'views/Screenshots';
import Smartphone from 'views/Smartphone';
import Social from 'views/Social';
import Store from 'views/Store';
import Templates from 'views/Templates';
import Text from 'views/Text';

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
        <Route path={url(match.url, '/icon')} component={Icon} />
        <Route path={url(match.url, '/screenshots')} component={Screenshots} />
        <Route path={url(match.url, '/smartphone')} component={Smartphone} />
        <Route path={url(match.url, '/social')} component={Social} />
        <Route path={url(match.url, '/store')} component={Store} />
        <Route path={url(match.url, '/templates')} component={Templates} />
        <Route path={url(match.url, '/text/:fieldId')} component={Text} />
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
