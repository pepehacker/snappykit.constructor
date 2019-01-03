import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

// Entities
import { getCurrentTemplateId } from 'entities/template/selector';
import { getTemplateById } from 'templates';

// Types
import {
  DESKTOP_DEVICE_ID,
  MOBILE_DEVICE_ID,
  TABLET_DEVICE_ID,
} from 'views/Editor';

// Styles
import styles from './View.scss';

const EditorView = ({
  className: classNameProp,
  // container,
  currentDevice,
  Template,
  // root,
  // scale,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootDeviceDesktop]: currentDevice === DESKTOP_DEVICE_ID,
    [styles.RootDeviceMobile]: currentDevice === MOBILE_DEVICE_ID,
    [styles.RootDeviceTablet]: currentDevice === TABLET_DEVICE_ID,
  });

  return (
    <div className={className}>
      {Template && (
        <div className={styles.Container}>
          <Template />
        </div>
      )}
    </div>
  );
};

EditorView.propTypes = ({
  className: PropTypes.string,
  currentDevice: PropTypes.string,
});

const mapStateToProps = ({ views, ...state }) => {
  const currentTemplateId = getCurrentTemplateId(state);
  const { Component } = getTemplateById(currentTemplateId);

  return {
    currentDevice: get(views, 'editor.currentDevice'),
    Template: Component,
  }
};

export default compose(
  connect(mapStateToProps)
)(EditorView);
