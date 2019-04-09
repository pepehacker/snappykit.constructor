// @flow
import classNames from 'classnames';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Ducks
import { PRICE_AVERAGE, PRICE_MAX, PRICE_MIN } from '../ducks';

// Styles
import styles from './Price.scss';

type PlansPriceType = {
  description: string,
  id: string,
  isDensed: boolean,
  isSelected: boolean,
  title: string,
};

const PlansPrice: React.Element<'div'> = ({
  description,
  handleClick,
  id,
  isDensed,
  isSelected,
  title,
}: PlansPriceType) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsDensed]: isDensed,
    [styles.RootIsSelected]: isSelected,

    [styles.RootVariantAverage]: id === PRICE_AVERAGE,
    [styles.RootVariantMax]: id === PRICE_MAX,
    [styles.RootVariantMin]: id === PRICE_MIN,
  });

  return (
    <div
      className={rootClassNames} onClick={handleClick}
      role="button" tabIndex={0}
    >
      <div className={styles.Icon} />
      <div className={styles.Title}>
        {title}
      </div>

      <div className={styles.Description}>
        {description}
      </div>

      <div className={styles.Actions}>
        <button className={styles.Next} type="button">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default compose(
  withHandlers({
    handleClick: ({ id, onClick }): Function => (): boolean => onClick && onClick(id),
  }),
)(PlansPrice);
