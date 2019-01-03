import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

import Template from 'template';

// Types
import {
  DESKTOP_DEVICE_ID,
  MOBILE_DEVICE_ID,
  TABLET_DEVICE_ID,
} from 'views/Editor';

// Utils
import throttle from 'utils/throttle';

import styles from './View.scss';

const EditorView = ({
  className: classNameProp,
  // container,
  currentDevice,
  // root,
  // scale,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootDeviceDesktop]: currentDevice === DESKTOP_DEVICE_ID,
    [styles.RootDeviceMobile]: currentDevice === MOBILE_DEVICE_ID,
    [styles.RootDeviceTablet]: currentDevice === TABLET_DEVICE_ID,
  });

  return (
    <div
      className={className}
      // ref={root}
      // style={{ height: `${get(container, 'current.clientHeight', 100)}px`}}
    >
      <div
        className={styles.Container}
        // ref={container}
        // style={{ transform: `scale(${scale})` }}
      >
        <Template />
      </div>
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

export default compose(
  connect(mapStateToProps),
  withState('container', 'setContainer', createRef()),
  withState('root', 'setRoot', createRef()),
  withState('scale', 'setScale', 100),
  withHandlers({
    handleResize: ({
      container,
      currentDevice,
      root,
      scale,
      setScale,
    }) => throttle((event: Object) => {
      let newScale;
      // const width = Math.min(root.current.clientWidth, Math.max(0, container.current.clientWidth));

      switch (currentDevice) {
        case DESKTOP_DEVICE_ID:
          newScale = Math.min(root.current.clientWidth, Math.max(0, 1280)) / 1280;
          break;
        case MOBILE_DEVICE_ID:
          newScale = Math.min(root.current.clientWidth, Math.max(0, 320)) / 320;
          break;
        case TABLET_DEVICE_ID:
          newScale = Math.min(root.current.clientWidth, Math.max(0, 768)) / 768;
          break;
        default:
          break;
      }

      if (newScale !== scale) {
        setScale(newScale);
      }
    }, 300),
  }),
  lifecycle({
    // componentDidMount() {
    //   const { handleResize } = this.props;
    //   handleResize();
    //   window.addEventListener('resize', handleResize, true);
    // },
    // componentDidUpdate() {
    //   const { handleResize } = this.props;
    //   handleResize();
    // },
    // componentWillUnmount() {
    //   const { handleResize } = this.props;
    //   window.removeEventListener('resize', handleResize, true);
    // },
  })
)(EditorView);
