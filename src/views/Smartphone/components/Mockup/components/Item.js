/* eslint-disable */
import classNames from 'classnames';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Components
import Pro from 'components/Pro';

// Entities
import { SMARTPHONE, SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'template';

// Styles
import styles from './Item.scss';

type SmartphoneMockupItemPropTypes = {
  id: number | string,
  handleClick: (SyntheticEvent) => void,
  handleLoad: (SyntheticEvent) => void,
  isCurrent: boolean,
  isLoaded: boolean,
  isPro: boolean,
  model: SMARTPHONE_MODEL.IPHONE | SMARTPHONE_MODEL.PIXEL
};

const SmartphoneMockupItem = ({
  id,
  model,
  // Handles
  handleClick,
  handleLoad,
  // State
  isCurrent,
  isLoaded,
  isPro
}: SmartphoneMockupItemPropTypes): React.Element<'div'> => {
  const className = classNames(styles.Root, {
    [styles.RootIsCurrent]: isCurrent,
    [styles.RootIsLoaded]: isLoaded,
    [styles.RootIsPro]: isPro,

    [styles.RootVariantIphone]: model === SMARTPHONE_MODEL.IPHONE,
    [styles.RootVariantPixel]: model === SMARTPHONE_MODEL.PIXEL
  });

  return (
    <div
      className={className}
      onClick={isPro ? null : handleClick}
      role="button"
    >
      <img
        alt={id}
        className={styles.Preview}
        onLoad={handleLoad}
        src={require(`assets/mockup/${model}/${id}.png`)}
      />

      <div className={styles.Current}>
        <div className={styles.Check} />
      </div>

      {isPro && <Pro className={styles.Pro} />}
    </div>
  );
};

export default compose(
  withState('isLoaded', 'setLoad', true),
  withHandlers({
    handleClick: ({ id, onClick }) => () => onClick && onClick(id),
    handleLoad: ({ setLoad }) => () => setLoad && setLoad(false)
  })
)(SmartphoneMockupItem);
