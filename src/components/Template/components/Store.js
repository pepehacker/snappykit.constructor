import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Store.scss';

const Store = () => (
  <div className={styles.Root}>
    <a
      className={styles.Link}
      href="/#"
    >
      <i className={classNames(styles.Logo, 'fab fa-apple')} />

      <div className={styles.Info}>
        <div className={styles.Label}>
          Download it from
        </div>

        <div className={styles.Title}>
          APP STORE
        </div>
      </div>
    </a>

    <a
      className={styles.Link}
      href="/#"
    >
      <i className={classNames(styles.Logo, 'fab fa-google-play')} />

      <div className={styles.Info}>
        <div className={styles.Label}>
          Download it from
        </div>

        <div className={styles.Title}>
          GOOGLE PLAY
        </div>
      </div>
    </a>
  </div>
);

export default Store;
