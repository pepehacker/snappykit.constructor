import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { compose, withHandlers } from 'recompose';

// Components
import Button from 'components/Button';
import Modal from 'components/Modal';

// Services
import { closeModal } from 'services/modals';

// Views
import { LIMIT_MODAL_ID } from 'views/Websites/ducks';

// Styles
import styles from './Modal.scss';

const WebsitesLimitModal = () => (
  <Modal id={LIMIT_MODAL_ID}>
    {({ isEntered }) => (
      <CSSTransition
        classNames={{
          enter: styles.RootAnimateEnter,
          enterActive: styles.RootAnimateEnterActive,
        }}
        in={isEntered}
        timeout={700}
        unmountOnExit
      >
        <div className={styles.Root}>
          <div className={styles.Icon} />

          <div className={styles.Description}>
            You have created the maximum number of websites.
          </div>

          <div className={styles.Title}>
            Delete one or choose another plan
          </div>

          <div className={styles.Actions}>
            <Button className={styles.Link}>
              Plans
            </Button>
          </div>
        </div>
      </CSSTransition>
    )}
  </Modal>
);

export default compose(
  connect(null, { closeModal }),
  withHandlers({
    handleClick: ({ closeModal }): func =>
      (event: Object): void =>
        closeModal(LIMIT_MODAL_ID),
  }),
)(WebsitesLimitModal);
