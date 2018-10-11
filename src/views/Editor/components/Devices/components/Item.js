import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  setCurrentDevice,

  DESKTOP_DEVICE_ID,
  MOBILE_DEVICE_ID,
  TABLET_DEVICE_ID,
} from 'views/Editor';

import styles from './Item.scss';

const EditorDevicesItem = ({
  className: classNameProp,
  handleClick,
  id,
  isActive,
  title,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootIsActive]: !!isActive,

    [styles.RootIconDesktop]: id === DESKTOP_DEVICE_ID,
    [styles.RootIconMobile]: id === MOBILE_DEVICE_ID,
    [styles.RootIconTablet]: id === TABLET_DEVICE_ID,
  });

  return (
    <button
      className={className}
      onClick={handleClick}
      type="button"
    >
      <div className={styles.Cover}>
        <div className={styles.Icon} />
      </div>

      <div className={styles.Title}>
        {title}
      </div>
    </button>
  );
};

EditorDevicesItem.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  title: PropTypes.string,
};

const mapStateToProps = ({ views }, { id }) => ({
  isActive: get(views, 'editor.currentDevice') === id,
});

const mapDispatchToProps = (dispatch, { id }) => ({
  handleClick: () => dispatch(setCurrentDevice(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorDevicesItem);
