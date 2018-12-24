import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Social.scss';

const Social = () => (
  <div className={styles.Root}>
    <a className={styles.Link} href="/#">
      <i className={classNames(styles.Icon, 'fab fa-facebook-square')} />
    </a>

    <a className={styles.Link} href="/#">
      <i className={classNames(styles.Icon, 'fab fa-twitter')} />
    </a>

    <a className={styles.Link} href="/#">
      <i className={classNames(styles.Icon, 'fab fa-instagram')} />
    </a>
  </div>
);

export default Social;
