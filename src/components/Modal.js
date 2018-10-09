import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Portal } from 'react-portal';
import { connect } from 'react-redux';

// Actions
import { closeModal } from 'services/modals';

import styles from './Modal.scss';

const Modal = ({
  children,
  handleClose,
  isOpened,
}) => (
  <Portal isOpen={isOpened}>
    <div className={styles.Root}>
      <div className={styles.Backdrop} onClick={handleClose} />
      <div className={styles.Container}>
        {children}
      </div>
    </div>
  </Portal>
);

Modal.propTypes = {
  children: PropTypes.func,
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
