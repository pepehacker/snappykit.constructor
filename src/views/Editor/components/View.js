import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';

// Entities
import { VIEW } from 'entities/template/constants';
import { getCurrentTemplateId } from 'entities/template/selector';
import { getTemplateById } from 'templates';

// Styles
import styles from './View.scss';

const EditorView = ({
  className: classNameProp,
  currentDevice,
  scale,
  Template,

  // Registers
  registerContainer,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootDeviceDesktop]: currentDevice === VIEW.DESKTOP,
    [styles.RootDeviceMobile]: currentDevice === VIEW.MOBILE,
    [styles.RootDeviceTablet]: currentDevice === VIEW.TABLET,
  });

  return (
    <div className={className}>
      {Template && (
        <div
          className={styles.Container}
          ref={registerContainer}
        >
          <Template
            style={{ transform: `scale(${scale})`}}
            view={currentDevice}
          />
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
  connect(mapStateToProps),
  withState('scale', 'setScale', 1),
  withHandlers(() => {
    let $container;

    return {
      handleResize: ({ currentDevice, setScale }) => () => {
        const containerWidth = $container.clientWidth;
        alert(123);
      },

      // Registers
      registerContainer: ({ handleResize }) => (node: HTMLDivElement) => {
        $container = node;
      },
    };
  }),
)(EditorView);
