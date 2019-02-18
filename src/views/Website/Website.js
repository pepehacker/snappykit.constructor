import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { compose, lifecycle, withState } from 'recompose';
import url from 'url-join';

// Components
import Menu from './components/Menu';

// Entities
import { fetchTemplate } from 'entities/template';
import { isEditable } from 'entities/websites/selector';

// Views
import Editor from 'views/Editor';

import styles from './Website.scss';

const Website = ({
  // Props
  match,
  templateId,
  websiteId,

  // State
  isEditable,
  isMounted,
}) => (
  <CSSTransition
    classNames={{
      enter: styles.RootAnimateEnter,
      enterActive: styles.RootAnimateEnterActive,
    }}
    in={isMounted}
    timeout={1200}
    unmountOnExit
  >
    <div className={styles.Root}>
      {!isEditable && <Redirect to="/" />}

      <div className={styles.Menu}>
        <Menu websiteId={websiteId} />

        <div className={styles.Copyright}>
          © 2018 Snappykit. All rights reserved
        </div>
      </div>

      {isEditable && websiteId && (
        <div className={styles.Container}>
          <Switch>
            <Route path={url(match.url, '/editor')} component={Editor} />
          </Switch>
        </div>
      )}
    </div>
  </CSSTransition>
);

Website.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state: Object, { match }) => {
  const websiteId = get(match, 'params.websiteId', 0);

  return {
    websiteId,
    isEditable: isEditable(state, websiteId),
  };
};

export default compose(
  connect(mapStateToProps, { fetchTemplate }),
  withState('isMounted', 'setMounted', false),
  lifecycle({
    componentDidMount() {
      this.props.fetchTemplate(1);
      this.props.setMounted(true);
    }
  })
)(Website);
