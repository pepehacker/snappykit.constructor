import classNames from 'classnames';
import { get, values } from 'lodash';
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

// Styles
import ROUTES from './routes';
import styles from './Editor.scss';

const Editor = ({
  // Props
  location,
  match,
  websiteId,
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
              {state => (
                <Switch location={location}>
                  {ROUTES.map(({ Component, exact, id, path }) => (
                    <Route
                      key={id}
                      path={url(match.url, path)}
                      render={props => <Component
                        {...props} state={state}
                        websiteId={websiteId}
                      />}
                    />
                  ))}
                </Switch>
              )}
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
    id,
    isAvailable:
      sectionId === 'templates' ||
      values(get(config, 'section')).filter(({ type }) => type === sectionId).length > 0,
    sectionId,
    websiteId,
  };
};

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withState('isMounted', 'setMounted', false),
  withState('debugLocation', 'setDebugLocation', false),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true);
    },
    componentDidUpdate() {
      const { id, history, sectionId, websiteId } = this.props;

      if (!id && sectionId === 'text') {
        history.replace(`/${websiteId}/editor/text/title`);
      }
    },
  }),
)(Editor);
