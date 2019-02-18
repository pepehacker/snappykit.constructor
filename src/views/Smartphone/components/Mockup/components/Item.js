/* eslint-disable */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Entities
import {
  SMARTPHONE,
  SMARTPHONE_MODEL,
  SMARTPHONE_STYLE,
} from 'entities/template/constants';

// Styles
import styles from './Item.scss';

const SmartphoneMockupItem = ({
  handleClick,
  handleLoad,
  id,
  isCurrent,
  isLoaded,
  model,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootIsCurrent]: isCurrent,
    [styles.RootIsLoaded]: isLoaded,

    [styles.RootVariantIphone]: model === SMARTPHONE_MODEL.IPHONE,
    [styles.RootVariantPixel]: model === SMARTPHONE_MODEL.PIXEL,
  });

  return (
    <div
      className={className}
      onClick={handleClick}
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
    </div>
  );
};

SmartphoneMockupItem.propTypes = {
  id: PropTypes.string,
  isCurrent: PropTypes.bool,
};

export default compose(
  withState('isLoaded', 'setLoad', true),
  withHandlers({
    handleClick: ({ id, onClick }) => () =>
      onClick && onClick(id),
    handleLoad: ({ setLoad }) => () =>
      setLoad && setLoad(false),
  }),
)(SmartphoneMockupItem);
