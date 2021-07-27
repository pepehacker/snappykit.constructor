import classNames from 'classnames';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Styles
import styles from './Card.scss';

const ImageCard = ({ handleClick, isSelected, label, src, value }) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsSelected]: isSelected
  });

  return (
    <button className={rootClassNames} onClick={handleClick} type="button">
      <img alt={value} className={styles.Image} src={src} />
      <div className={styles.Check} />
      {label && <div className={styles.Label}>{label}</div>}
    </button>
  );
};

export default compose(
  withHandlers({
    handleClick: ({ onClick, value }): func => (event: Object): boolean =>
      onClick && onClick(value)
  })
)(ImageCard);
