import React, { useCallback } from 'react';

// Components
import Button from 'components/Button';
import Modal from 'components/Modal';

// Styles
import styles from './Status.scss';

const PlansStatus = ({ closeModal }) => {
  const handleCloseClick = useCallback(() => {
    window.localStorage.setItem('syncPro', true);
    window.location.reload();
  }, []);

  return (
    <Modal id="subStatus">
      {({ data }) => (
        <div className={styles.Root}>
          <div className={styles.Icon} />
          <h2 className={styles.Title}>
            {data.success && 'Thank You!'}
            {data.cancel && 'Subscription Cancelled'}
          </h2>

          <div className={styles.Description}>
            {data.success &&
              'We are excited you have chosen us to grow your app.'}

            {data.cancel && 'You have successfully cancelled your subscription'}
          </div>

          <div className={styles.Actions}>
            <Button onClick={handleCloseClick} variant="gradient">
              Close
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PlansStatus;
