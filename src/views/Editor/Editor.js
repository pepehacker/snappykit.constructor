import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { compose, lifecycle, withState } from 'recompose';
import url from 'url-join';

// Containers
import Devices from './containers/Devices';
import View from './containers/View';

// Views
import Background from 'views/Background';
import Icon from 'views/Icon';
import Screenshots from 'views/Screenshots';
import Smartphone from 'views/Smartphone';
import Social from 'views/Social';
import Store from 'views/Store';
import Templates from 'views/Templates';
import Text from 'views/Text';

import styles from './Editor.scss';

const Editor = ({
  // Props
  location,
  match,

  // State
  isMounted,
}) => (
  <CSSTransition
    classNames={{
      enter: styles.RootAnimateEnter,
      enterActive: styles.RootAnimateEnterActive,
    }}
    in={isMounted}
    timeout={700}
    unmountOnExit
  >
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
        <TransitionGroup>
          <CSSTransition
            classNames={{
              enter: styles.SidebarAnimateEnter,
              enterActive: styles.SidebarAnimateEnterActive,
              exit: styles.SidebarAnimateExit,
              exitActive: styles.SidebarAnimateExitActive,
            }}
            key={location.key}
            timeout={{ enter: 600, exit: 400 }}
            unmountOnExit
          >
            <Switch location={location}>
              <Route path={url(match.url, '/background')} component={Background} />
              <Route path={url(match.url, '/icon')} component={Icon} />
              <Route path={url(match.url, '/screenshots')} component={Screenshots} />
              <Route path={url(match.url, '/smartphone')} component={Smartphone} />
              <Route path={url(match.url, '/social')} component={Social} />
              <Route path={url(match.url, '/store')} component={Store} />
              <Route path={url(match.url, '/templates')} component={Templates} />
              <Route path={url(match.url, '/text/:fieldId')} component={Text} />
              <Route path={url(match.url, '/text')} component={Text} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  </CSSTransition>
);

Editor.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default compose(
  withState('isMounted', 'setMounted', false),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true);
    },
  }),
)(Editor);
