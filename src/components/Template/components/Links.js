import React from 'react';

// Styles
import styles from './Links.scss';

const Links = () => (
  <div className={styles.Root}>
    <a className={styles.Link} href="/#">
      PRIVACY
    </a>

    <a className={styles.Link} href="/#">
      TERMS
    </a>
  </div>
);

export default Links;
