// @flow
import classNames from 'classnames';
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Styles
import styles from './Card.scss';

// Template
import { BACKGROUND_COLOR, BACKGROUND_GRADIENT } from 'template/config';

// Type
import type { BackgroundImageCardType } from '../Image.type';

const VARIANT = {
  IMAGE: 'image',
  PREVIEW: 'preview',
  UPLOAD: 'upload',
};

const BackgroundImageCard = ({
  editType,
  src,
  variant = VARIANT.IMAGE,
  // Handlers
  handleAddColor,
  handleAddGradient,
  handleClick,
  handleLoad,
  // State
  isLoaded,
  isSelected,
}: BackgroundImageCardType): React.Element<'button'> => (
  <div
    className={classNames(styles.Root, {
      [styles.RootIsLoaded]: isLoaded,
      [styles.RootIsPreview]: variant === VARIANT.PREVIEW,
      [styles.RootIsSelected]: isSelected,
    })}
  >
    <div
      className={styles.Card} onClick={handleClick}
      role="button" tabIndex={0}
    >
      <img
        alt="Background" className={styles.Image}
        onLoad={handleLoad} src={src}
      />

      <div className={styles.Check} />
    </div>

    {variant === VARIANT.IMAGE && (
      <div className={styles.Actions}>
        {isSelected && (
          <React.Fragment>
            {(!editType || editType === BACKGROUND_COLOR) && (
              <div
                className={styles.Link} onClick={handleAddColor}
                role="button" tabIndex={0}
              >
                {`${editType ? 'Edit' : 'Add'} Color`}
              </div>
            )}

            {(!editType || editType === BACKGROUND_GRADIENT) && (
              <div
                className={styles.Link} onClick={handleAddGradient}
                role="button" tabIndex={0}
              >
                {`${editType ? 'Edit' : 'Add'} Gradient`}
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    )}
  </div>
);

export default compose(
  withState('isLoaded', 'setLoaded', true),
  withHandlers({
    handleAddColor: ({ onEdit }): Function => (): boolean => onEdit && onEdit(BACKGROUND_COLOR),
    handleAddGradient: ({ onEdit }): Function => (): boolean =>
      onEdit && onEdit(BACKGROUND_GRADIENT),
    handleClick: ({ onClick, src }): Function => (event: Object): boolean =>
      onClick && onClick(src),
    handleLoad: ({ setLoaded }): Function => () => setLoaded(false),
  }),
)(BackgroundImageCard);
