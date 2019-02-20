import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Portal } from 'react-portal';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

// Actions
import { closeModal } from 'services/modals';

import styles from './Modal.scss';

const Modal = ({
  children,
  className,
  classNames: {
    root: rootClassName,
    backdrop: backdropClassName,
    container: containerClassName,
  } = {},
  handleClose,
  isOpened,
  ...props,
}) => {
  const rootClassNames = classNames(className, rootClassName, styles.Root);
  const backdropClassNames = classNames(backdropClassName, styles.Backdrop);
  const containerClassNames = classNames(containerClassName, styles.Container);

  return (
    <CSSTransition
      classNames={{
        enter: styles.RootAnimateEnter,
        enterActive: styles.RootAnimateEnterActive,
        enterDone: styles.RootAnimateEnterDone,
        exit: styles.RootAnimateExit,
        exitActive: styles.RootAnimateExitActive,
      }}
      in={isOpened}
      timeout={200}
      unmountOnExit
    >
      {(state: string): func => (
        <Portal>
          <div className={rootClassNames}>
            <div
              className={backdropClassNames}
              onClick={handleClose}
            />

            <div className={containerClassNames}>
              {typeof children === 'function'
                ? children({ ...props, isEntered: state === 'entered' })
                : children}
            </div>
          </div>
        </Portal>
      )}
    </CSSTransition>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  handleClose: PropTypes.func,
  isOpened: PropTypes.bool,
};

const mapStateToProps = ({ services }, { id }) => {
  const modal = get(services, `modals.${id}`);

  return {
    ...modal,
    isOpened: !!modal,
  }
};

const mapDispatchToProps = (dispatch, { id }) => ({
  handleClose: () => dispatch(closeModal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
