// @flow
import { get } from 'lodash';
import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withProps, withState } from 'recompose';

// Ducks
import {
  // Interval
  MONTH,
  // Plans
  PLAN_AGENCY,
  PLAN_BASIC,
  PLAN_LITE,
  PLAN_PRO,
  // Price
  PRICE_MIN,
  // Selectors
  getPrice,
} from '../ducks';

// Styles
import styles from './Item.scss';

type PlansItemType = {
  cost: number,
  count: number,
  id: number,
  isFetching: boolean,
  features: Array<string>,
  handleClick: Function,
  title: string,
};

const PlansItem = ({
  cost,
  count,
  features = [],
  id,
  title,
  // Handlers
  handleClick,
  // State
  isFetching,
}: PlansItemType): React.Element<'div'> => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantAgency]: id === PLAN_AGENCY,
      [styles.RootVariantBasic]: id === PLAN_BASIC,
      [styles.RootVariantLite]: id === PLAN_LITE,
      [styles.RootVariantPro]: id === PLAN_PRO,
    })}
  >
    <div className={styles.Content}>
      <div className={styles.Info}>
        <div className={styles.Title}>
          {title}
        </div>

        <div className={styles.Price}>
          {isFetching ? 'LOAD' : cost || 'FREE'}
          {cost && <span className={styles.Unit}>$</span>}
        </div>

        <div className={styles.Count}>
          {`${count} WEBSITE`}
        </div>

        <div className={styles.List}>
          {features.map(
            (feature: string, index: number): React.Element<'div'> => (
              <div key={index} className={styles.Item}>
                {feature}
              </div>
            ),
          )}
        </div>
      </div>

      <div className={styles.Cover} />
    </div>

    <button
      className={styles.Button} onClick={handleClick}
      type="button"
    >
      {cost ? 'BUY' : 'TRY IT'}
    </button>
  </div>
);

const mapStateToProps: Function = (state: Object) => ({
  price: getPrice(state),
});

export default compose(
  connect(mapStateToProps),
  withProps(({ period = MONTH, price = PRICE_MIN, productIds }) => ({
    productId: get(productIds, `${period}.${price}`),
  })),
  withState('cost', 'setCost', null),
  withState('isFetching', 'setFetching', false),
  withHandlers({
    // Fetch cost
    fetchCost: ({ productId, setCost, setFetching }): Function => (): void => {
      if (productId) {
        setFetching(true);

        // eslint-disable-next-line
        Paddle.Product.Price('gross', productId, 1, (price: string = '') => {
          setFetching(false);
          setCost(parseInt(price.replace('US$', ''), 10));
        });
      }
    },
    // Handlers
    handleClick: ({ productId, setCost }): Function => (event: SyntheticEvent) =>
      // eslint-disable-next-line
      Paddle.Checkout.open({ product: productId }),
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchCost();
    },
    componentDidUpdate({ price: prevPrice }) {
      const { fetchCost, price } = this.props;
      price !== prevPrice && fetchCost();
    },
  }),
)(PlansItem);
