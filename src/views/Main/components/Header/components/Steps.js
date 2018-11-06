import React from 'react';

import styles from './Steps.scss';

const STEPS = [
  { id: 'search', title: 'Search' },
  { id: 'editor', title: 'Editor' },
  { id: 'launch', title: 'Launch' },
];

const MainHeaderSteps = () => (
  <div className={styles.Root}>
    {STEPS.map(({ id, title }, index) => (
      <div className={styles.Step} key={id}>
        <div className={styles.Content}>
          <div className={styles.Number}>
            {index + 1}
          </div>

          <div className={styles.Title}>
            {title}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MainHeaderSteps;
