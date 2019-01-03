/* eslint-disable */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

import styles from './Item.scss';

const SmartphoneMockupItem = ({
  handleClick,
  handleLoad,
  id,
  isCurrent,
  isLoaded,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootIsCurrent]: isCurrent,
    [styles.RootIsLoaded]: isLoaded,
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
        src={require(`assets/mockup/${id}.png`)}
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
