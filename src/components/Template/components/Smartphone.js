import React from 'react';

// Styles
import styles from './Smartphone.scss';

const Smartphone = ({
  children
}) => (
  <div className={styles.Root}>
    <div className={styles.Container}>
      {children}
    </div>
  </div>
);

export default Smartphone;
