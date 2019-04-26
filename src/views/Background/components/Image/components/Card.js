// @flow
import classNames from 'classnames';
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Styles
import styles from './Card.scss';

// Type
import type { BackgroundImageCardType } from '../Image.type';

const VARIANT = {
  IMAGE: 'image',
  UPLOAD: 'upload',
};

const BackgroundImageCard = ({
  src,
  variant = VARIANT.IMAGE,
  // Handlers
  handleClick,
  handleLoad,
  // State
  isLoaded,
  isSelected,
}: BackgroundImageCardType): React.Element<'button'> => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsLoaded]: isLoaded,
    [styles.RootIsSelected]: isSelected,
  });

  return (
    <button
      className={rootClassNames} onClick={handleClick}
      type="button"
    >
      <img
        alt="Background" className={styles.Image}
        onLoad={handleLoad} src={src}
      />

      <div className={styles.Check} />
    </button>
  );
};

export default compose(
  withState('isLoaded', 'setLoaded', true),
  withHandlers({
    handleClick: ({ onClick, src }): Function => (event: Object): boolean =>
      onClick && onClick(src),
    handleLoad: ({ setLoaded }): Function => () => setLoaded(false),
  }),
)(BackgroundImageCard);
