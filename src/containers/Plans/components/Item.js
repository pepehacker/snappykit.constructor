// @flow
import { get } from 'lodash';
import classNames from 'classnames';
import * as React from 'react';
import AnimatedNumber from 'react-animated-number';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from 'recompose';

// Ducks
import {
  // Interval
  MONTH,
  // Selectors
  getPeriod,
  getPrice
} from '../ducks';

// Services
import { openModal } from 'services/modals';
import { getSubscription, getUserEmail, isPayed } from 'services/session';

import {
  SUBSCRIPTION_AGENCY,
  SUBSCRIPTION_BASIC,
  SUBSCRIPTION_LITE,
  SUBSCRIPTION_PRO
} from 'services/session/constants';

// Styles
import styles from './Item.scss';

type PlansItemType = {
  cost: number,
  count: number,
  id: number,
  isCurrent: boolean,
  isFetching: boolean,
  features: Array<string>,
  handleCancel: (SyntheticEvent) => void,
  handleClick: (SyntheticEvent) => void,
  title: string
};

const PlansItem = ({
  cost = 0,
  count,
  features = [],
  id,
  period,
  title,
  // Handlers
  handleCancel,
  handleClick,
  // State
  isCurrent,
  isFetching,
  isPayed
}: PlansItemType): React.Element<'div'> => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantAgency]: id === SUBSCRIPTION_AGENCY,
      [styles.RootVariantBasic]: id === SUBSCRIPTION_BASIC,
      [styles.RootVariantLite]: id === SUBSCRIPTION_LITE,
      [styles.RootVariantPro]: id === SUBSCRIPTION_PRO
    })}
  >
    <div className={styles.Content}>
      <div className={styles.Info}>
        <div className={styles.Title}>{title}</div>

        <div className={styles.Price}>
          {id === SUBSCRIPTION_LITE ? (
            'FREE'
          ) : (
            <AnimatedNumber
              component="span"
              formatValue={(n) => Math.ceil(n)}
              value={
                isFetching
                  ? 1
                  : period === MONTH
                  ? Math.min(99, cost)
                  : cost / 12
              }
            />
          )}
          {cost && <span className={styles.Unit}>$</span>}
        </div>

        <div className={styles.Count}>{`${count} WEBSITE`}</div>

        <div className={styles.List}>
          {features.map((feature: string, index: number): React.Element<
            'div'
          > => (
            <div key={index} className={styles.Item}>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.Cover} />
    </div>

    {cost && (
      <button
        className={styles.Button}
        onClick={isCurrent ? handleCancel : handleClick}
        type="button"
      >
        {isCurrent ? 'CANCEL' : isPayed ? 'CHANGE' : 'BUY'}
      </button>
    )}
  </div>
);

const mapStateToProps: Function = (state: Object, { id }) => {
  const period = getPeriod(state);
  const subscription: Object = getSubscription(state);

  return {
    subscription,
    email: getUserEmail(state),
    isCurrent:
      id === get(subscription, 'name') &&
      period === get(subscription, 'periodType'),
    isPayed: isPayed(state),
    period: getPeriod(state),
    price: getPrice(state)
  };
};

export default compose(
  connect(mapStateToProps, { openModal }),
  withProps(({ period = MONTH, productIds }) => ({
    productId: get(productIds, period)
  })),
  withState('cost', 'setCost', null),
  withState('isFetching', 'setFetching', false),
  withHandlers({
    // Fetch cost
    fetchCost: ({
      email,
      productId,
      setCost,
      setFetching
    }): Function => (): void => {
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
    handleCancel: ({
      email,
      productId,
      subscription
    }): Function => (): void => {
      // eslint-disable-next-line
      Paddle.Checkout.open({
        override: get(subscription, 'cancelUrl'),
        successCallback: () => {
          openModal('subStatus', { data: { cancel: true } });
        }
      });
    },
    handleClick: ({
      email,
      openModal,
      productId,
      setCost,
      subscription
    }): Function => (event: SyntheticEvent) =>
      // eslint-disable-next-line
      Paddle.Checkout.open({
        email,
        passthrough: email,
        product: productId,
        successCallback: () => {
          openModal('subStatus', { data: { success: true } });
        }
      })
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchCost();
    },
    componentDidUpdate({ period: prevPeriod, price: prevPrice }) {
      const { fetchCost, period, price } = this.props;
      (price !== prevPrice || period !== prevPeriod) && fetchCost();
    }
  })
)(PlansItem);
