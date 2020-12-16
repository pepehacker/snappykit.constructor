import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Portal } from 'react-portal';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { compose, withHandlers } from 'recompose';

// Actions
import { closeModal } from 'services/modals';

import styles from './Modal.scss';

type ModelType = {
  children: React.Element<node>,
  className: string,
  classNames: {
    root: string,
    backdrop: string,
    container: string
  },
  handleClose: Function,
  isOpened: boolean
};

const Modal = ({
  children,
  className,
  classNames: {
    root: rootClassName,
    backdrop: backdropClassName,
    container: containerClassName
  } = {},
  handleClose,
  isOpened,
  ...props
}: ModelType): React.Element<typeof CSSTransition> => {
  const rootClassNames: string = classNames(
    className,
    rootClassName,
    styles.Root
  );
  const backdropClassNames: string = classNames(
    backdropClassName,
    styles.Backdrop
  );
  const containerClassNames: string = classNames(
    containerClassName,
    styles.Container
  );

  return (
    <CSSTransition
      classNames={{
        enter: styles.RootAnimateEnter,
        enterActive: styles.RootAnimateEnterActive,
        enterDone: styles.RootAnimateEnterDone,
        exit: styles.RootAnimateExit,
        exitActive: styles.RootAnimateExitActive
      }}
      in={isOpened}
      timeout={200}
      unmountOnExit
    >
      {(state: string): func => (
        <Portal>
          <div className={rootClassNames}>
            <div className={backdropClassNames} onClick={handleClose} />

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
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  handleClose: PropTypes.func,
  isOpened: PropTypes.bool
};

const mapStateToProps = ({ services }, { id, isOpened }) => {
  const modal = get(services, `modals.${id}`);

  return {
    ...modal,
    isOpened: !!modal || isOpened
  };
};

export default compose(
  connect(mapStateToProps, { closeModal }),
  withHandlers({
    handleClose: ({ closeModal, id, onClose }): Function => () => {
      closeModal(id);
      onClose && onClose();
    }
  })
)(Modal);
