import React from 'react';

// Styles
import oops from '../assets/oops.png';
import styles from './Oops.scss';

const Oops = () => (
  <div className={styles.Root}>
    <div className={styles.Content}>
      <div className={styles.Title}>Now you can use only the desktop version.</div>

      <div className={styles.Actions}>
        <a className={styles.Link} href="/">
          To Home
        </a>
      </div>
    </div>

    <img
      alt="Oops" className={styles.Oops}
      src={oops}
    />
  </div>
);

export default Oops;
