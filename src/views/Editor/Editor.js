import classNames from 'classnames';
import { get, has } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { compose, lifecycle, withState } from 'recompose';
import url from 'url-join';

// Components
import Available from './components/Available';

// Containers
import Devices from './containers/Devices';
import View from './containers/View';

// Entities
import { getWebsiteTemplate } from 'entities/websites';

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
  isAvailable,
  isMounted,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsNotAvailable]: !isAvailable,
  });

  return (
    <CSSTransition
      classNames={{
        enter: styles.RootAnimateEnter,
        enterActive: styles.RootAnimateEnterActive,
      }}
      in={isMounted}
      timeout={700}
      unmountOnExit
    >
      <div className={rootClassNames}>
        <div className={styles.Container}>
          <div className={styles.View}>
            <View />
          </div>

          <div className={styles.Devices}>
            <Devices />
          </div>
        </div>

        <div className={styles.Sidebar}>
          <Available isAvailable={isAvailable} />

          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames={{
                enter: styles.SidebarAnimateEnter,
                enterActive: styles.SidebarAnimateEnterActive,
                exit: styles.SidebarAnimateExit,
                exitActive: styles.SidebarAnimateExitActive,
              }}
              timeout={{ enter: 600, exit: 400 }}
              unmountOnExit
            >
              <Switch location={location}>
                <Route component={Background} path={url(match.url, '/background')} />
                <Route component={Icon} path={url(match.url, '/icon')} />
                <Route component={Screenshots} path={url(match.url, '/screenshots')} />
                <Route component={Smartphone} path={url(match.url, '/smartphone')} />
                <Route component={Social} path={url(match.url, '/social')} />
                <Route component={Store} path={url(match.url, '/store')} />
                <Route component={Templates} path={url(match.url, '/templates')} />
                <Route component={Text} path={url(match.url, '/text/:fieldId')} />
                <Route component={Text} path={url(match.url, '/text')} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </CSSTransition>
  );
};

Editor.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state: Object, { location }): Object => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id = get(match, 'params.id');
  const sectionId = get(match, 'params.sectionId');
  const websiteId = get(match, 'params.websiteId');

  const { config } = getWebsiteTemplate(state, websiteId);

  return {
    isAvailable: sectionId === 'templates' || has(config, `section.${id || sectionId}`),
  };
};

export default compose(
  connect(mapStateToProps),
  withState('isMounted', 'setMounted', false),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true);
    },
  }),
)(Editor);
