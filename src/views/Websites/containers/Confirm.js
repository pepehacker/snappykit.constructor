import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Button from 'components/Button';
import Form from 'components/Form';
import Modal from 'components/Modal';

// Ducks
import { CONFIRM_FORM_ID, CONFIRM_MODAL_ID } from '../ducks';

// Services
import { closeModal } from 'services/modals';

// Styles
import styles from './Confirm.scss';

const WebsitesConfirm = ({ handleClose, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Title}>Website will be deleted</div>

    <div className={styles.Description}>Do you really want to continue?</div>

    <div className={styles.Actions}>
      <Button type="submit" variant={Button.VARIANT.GRADIENT_REVERSE}>
        YES
      </Button>

      <Button onClick={handleClose}>NO</Button>
    </div>
  </Form>
);

const ComposedWebsitesConfirm = compose(
  connect(null, { closeModal }),
  withHandlers({
    handleClose: ({ closeModal }): func => (event: Object): void =>
      closeModal(CONFIRM_MODAL_ID)
  }),
  reduxForm({ form: CONFIRM_FORM_ID })
)(WebsitesConfirm);

const WebsitesConfirmModal = () => (
  <Modal id={CONFIRM_MODAL_ID}>
    {({ isEntered, onSubmit }) => (
      <CSSTransition
        classNames={{
          enter: styles.RootAnimateEnter,
          enterActive: styles.RootAnimateEnterActive
        }}
        in={isEntered}
        timeout={600}
        unmountOnExit
      >
        <ComposedWebsitesConfirm onSubmit={onSubmit} />
      </CSSTransition>
    )}
  </Modal>
);

export default WebsitesConfirmModal;
