import classNames from 'classnames';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Styles
import styles from './Card.scss';

const VARIANT = {
  IMAGE: 'image',
  UPLOAD: 'upload',
};

const BackgroundImageCard = ({
  handleClick,
  isSelected,
  src,
  variant = VARIANT.IMAGE,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsSelected]: isSelected,
  });

  return (
    <button
      className={rootClassNames}
      onClick={handleClick}
      type="button"
    >
      <img
        alt="Background"
        className={styles.Image}
        src={src}
      />

      <div className={styles.Check} />
    </button>
  );
};

export default compose(
  withHandlers({
    handleClick: ({ onClick, src }): func =>
      (event: Object): bool =>
        onClick && onClick(src),
  }),
)(BackgroundImageCard);
