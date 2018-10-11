import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Types
import {
  DESKTOP_DEVICE_ID,
  MOBILE_DEVICE_ID,
  TABLET_DEVICE_ID,
} from 'views/Editor';

import styles from './View.scss';

const EditorView = ({
  className: classNameProp,
  currentDevice,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootDeviceDesktop]: currentDevice === DESKTOP_DEVICE_ID,
    [styles.RootDeviceMobile]: currentDevice === MOBILE_DEVICE_ID,
    [styles.RootDeviceTablet]: currentDevice === TABLET_DEVICE_ID,
  });

  return (
    <div className={className}>
      <div className={styles.Container} />
    </div>
  );
};

EditorView.propTypes = ({
  className: PropTypes.string,
  currentDevice: PropTypes.string,
});

const mapStateToProps = ({ views }) => ({
  currentDevice: get(views, 'editor.currentDevice'),
});

export default connect(mapStateToProps)(EditorView);
