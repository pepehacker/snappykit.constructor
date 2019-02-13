import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Steps.scss';

const STEPS = [
  { id: 'search', path: '/search', title: 'Search' },
  { id: 'editor', path: '/editor', title: 'Editor' },
  { id: 'launch', path: '/launch', title: 'Launch' },
];

const MainHeaderSteps = () => (
  <div className={styles.Root}>
    {STEPS.map(({ id, path, title }, index: number): func => (
      <NavLink
        activeClassName={styles.LinkIsActive}
        className={styles.Link}
        key={index}
        to={path}
      >
        <div className={styles.Number}>
          {index + 1}
        </div>

        <div className={styles.Title}>
          {title}
        </div>
      </NavLink>
    ))}
  </div>
);

export default MainHeaderSteps;
