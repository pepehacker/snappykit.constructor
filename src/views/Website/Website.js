import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import url from 'url-join';

// Components
import Menu from './components/Menu';

// Entities
import { fetchTemplate } from 'entities/template';
import { getCurrentTemplateId } from 'entities/template/selector';

// Templates
import * as templates from 'templates';

// Views
import Editor from 'views/Editor';

import styles from './Website.scss';

const Website = ({
  match,
  templateId,
}) => (
  <div className={styles.Root}>
    <div className={styles.Menu}>
      <Menu />

      <div className={styles.Copyright}>
        © 2018 Snappykit. All rights reserved
      </div>
    </div>

    {templateId && (
      <div className={styles.Container}>
        <Switch>
          <Route path={url(match.url, '/editor')} component={Editor} />
        </Switch>
      </div>
    )}
  </div>
);

Website.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state: Object) => ({
  templateId: getCurrentTemplateId(state),
});

export default compose(
  connect(mapStateToProps, { fetchTemplate }),
  lifecycle({
    componentDidMount() {
      this.props.fetchTemplate(1);
    }
  })
)(Website);
