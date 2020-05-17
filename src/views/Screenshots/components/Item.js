import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { compose, withHandlers } from 'recompose';

import styles from './Item.scss';

const ScreenshotsItem = ({ handleClick, value, ...props }) => (
  <div className={styles.Root}>
    <div className={styles.Cover}>
      <img alt="screenshot" className={styles.Image} src={value} />
    </div>

    <button className={styles.Delete} onClick={handleClick} type="button">
      <div className={styles.Icon} />
    </button>
  </div>
);

export default SortableElement(
  compose(
    withHandlers({
      handleClick: ({ onDelete, value }) => () => onDelete && onDelete(value)
    })
  )(ScreenshotsItem)
);
