// @flow
import React from 'react';

// Components
import Modal from 'components/Modal';

// Ducks
import { PLANS_MODAL_ID } from './ducks';

// Styles
import styles from './Plans.scss';

const Plans: React.Element<Modal> = () => (
  <Modal id={PLANS_MODAL_ID} isOpened>
    <div className={styles.Root}>
      <div className={styles.Title}>Pricing & Plans</div>
      <div className={styles.Description}>Freedom of cost. Pay as you can.</div>

      <div className={styles.Price}>
        <div className={styles.PriceTitle}>Choose one of this:</div>
      </div>
    </div>
  </Modal>
);

export default Plans;
