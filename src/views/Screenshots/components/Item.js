import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

import styles from './Item.scss';

const ScreenshotsItem = ({
  image,
  title = 'Untitled',
}) => (
  <div className={styles.Root}>
    <div className={styles.Cover}>
      <img
        alt={title}
        className={styles.Image}
        src={image}
      />
    </div>

    <button
      className={styles.Delete}
      onClick={console.log}
      type="button"
    >
      <div className={styles.Icon} />
    </button>
  </div>
);

export default SortableElement(ScreenshotsItem);
