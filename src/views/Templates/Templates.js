import React from 'react';

// Components
import Card from './components/Card';

import styles from './Templates.scss';

const Templates = () => (
  <div className={styles.Root}>
    <div className={styles.Title}>
      Templates
    </div>

    <div className={styles.List}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Templates;
