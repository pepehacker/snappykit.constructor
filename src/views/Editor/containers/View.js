import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

// Actions
import { setBusy } from '../ducks/actions';

// Entities
import { VIEW } from 'entities/template/constants';
import { getCurrentTemplateId } from 'entities/template/selector';
import { getTemplateById } from 'templates';

// Styles
import styles from './View.scss';

const EditorView = ({
  // Props
  className: classNameProp,
  height,
  isBusied,
  scale,
  templateHeight,
  Template,
  view = VIEW.DESKTOP,

  // Registers
  registerContainer,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootDeviceDesktop]: view === VIEW.DESKTOP,
    [styles.RootDeviceMobile]: view === VIEW.MOBILE,
    [styles.RootDeviceTablet]: view === VIEW.TABLET,
  });

  return (
    <div
      className={className}
      ref={registerContainer}
    >
      {Template && (
        <div
          className={styles.Container}
          style={{ height: view !== VIEW.TABLET && height }}
        >
          <Template
            style={{
              margin:
                scale !== 1 &&
                !!height &&
                !!templateHeight &&
                `-${(height - templateHeight * scale) / 2}px 0`,
              opacity: isBusied ? 0 : 1,
              transform: !!scale && `scale(${scale})`
            }}
            view={view}
          />
        </div>
      )}
    </div>
  );
};

EditorView.propTypes = ({
  className: PropTypes.string,
  height: PropTypes.number,
  scale: PropTypes.number,
  Template: PropTypes.func,
  view: PropTypes.string,
});

const mapStateToProps = ({ views, ...state }) => {
  const currentTemplateId = getCurrentTemplateId(state);
  const { Component } = getTemplateById(currentTemplateId);

  return {
    ...get(views, 'editor'),
    Template: Component,
  }
};

export default compose(
  connect(mapStateToProps, { setBusy }),
  withState('height', 'setHeight', 0),
  withState('templateHeight', 'setTemplateHeight', 0),
  withState('scale', 'setScale', 1),
  withHandlers((): Object => {
    let $root;

    return {
      // Handlers
      handleResize: ({
        height,
        scale,
        setBusy,
        setHeight,
        setScale,
        setTemplateHeight,
        view,
      }): func => (): void => {
        if ($root) {
          const width = Math.min($root.clientWidth,
            view === VIEW.DESKTOP
              ? 1280 : view === VIEW.TABLET
                ? 768 : 320
          );

          let newHeight = 1;
          let newScale = 1;

          switch (view) {
            case VIEW.DESKTOP:
              newHeight = Math.floor(width / 1.6);
              newScale = width / 1280;
              break;
            case VIEW.TABLET:
              newHeight = Math.floor(width / 0.75);
              newScale = width / 768;
              break;
            case VIEW.MOBILE:
              newHeight = Math.floor(width / 0.5633);
              newScale = width / 320;
              break;
            default:
              newScale = 1;
              break;
          }

          if (newScale !== scale) {
            setScale(newScale);
          }

          if (newHeight !== height) {
            setHeight(newHeight);
            setTemplateHeight(newHeight * newScale);
          }
        }

        setBusy(false);
      },

      // Registers
      registerContainer: (): func => (node: HTMLDivElement): void => {
        $root = node;
      },
    };
  }),
  lifecycle({
    componentDidMount() {
      const { handleResize } = this.props;
      window.addEventListener('resize', handleResize, true);
      handleResize();
    },
    componentDidUpdate({ view: prevView }) {
      const { handleResize, view } = this.props;
      prevView !== view && setTimeout(handleResize, 500);
    },
    componentWillUnmount() {
      const { handleResize } = this.props;
      window.removeEventListener('resize', handleResize, true);
    },
  }),
)(EditorView);
