import React from 'react';

// Components
import Menu from './components/Menu';

import styles from './Website.scss';

const Website = () => (
  <div className={styles.Root}>
    <div className={styles.Menu}>
      <Menu />
    </div>
  </div>
);

export default Website;
