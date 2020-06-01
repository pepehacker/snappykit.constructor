// @flow
import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { compose, withHandlers } from 'recompose';

// Components
import Price from '../components/Price';

// Data
import PRICES from '../data/prices';

// Ducks
import { getPrice, setPrice } from '../ducks';

// Styles
import styles from './PriceList.scss';

type PlansPriceListType = {
  handleClick: Function,
  isEntered: boolean,
  price: string
};

const PlansPriceList = ({
  isEntered,
  handleClick,
  price
}: PlansPriceListType): React.Element<'div'> => (
  <div
    className={classNames(styles.Root, {
      [styles.RootHasPrice]: !!price
    })}
  >
    {PRICES.map((item: Object, index: number): React.Element<Price> => (
      <CSSTransition
        key={index}
        classNames={{
          enter: styles.ItemAnimateEnter,
          enterActive: styles.ItemAnimateEnterActive
        }}
        in={isEntered}
        timeout={600}
        unmountOnExit
      >
        <div
          className={styles.Item}
          style={{ transitionDelay: `${0.1 * index}s` }}
        >
          <Price
            {...item}
            isDensed={!!price}
            isSelected={price === item.id}
            onClick={handleClick}
          />
        </div>
      </CSSTransition>
    ))}
  </div>
);

const mapStateToProps: Function = (state: Object) => ({
  price: getPrice(state)
});

export default compose(
  connect(mapStateToProps, { setPrice }),
  withHandlers({
    handleClick: ({ setPrice }): Function => (price: string): void =>
      setPrice(price)
  })
)(PlansPriceList);
