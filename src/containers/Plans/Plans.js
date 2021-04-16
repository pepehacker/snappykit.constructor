// @flow
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { CSSTransition } from 'react-transition-group';

// Components
import Modal from 'components/Modal';
import Tabs, { Tab } from 'components/Tabs';

// Containers
import List from './containers/List';

// Ducks
import {
  getPeriod,
  getPrice,
  setPeriod,
  setPrice,
  MONTH,
  YEAR,
  PLANS_MODAL_ID
} from './ducks';

// Styles
import styles from './Plans.scss';

type PlansType = {
  handleChange: Function,
  handleClose: Function,
  period: string,
  price: string
};

const Plans = ({
  handleChange,
  handleClose,
  period,
  price
}: PlansType): React.Element<Modal> => (
  <Modal id={PLANS_MODAL_ID} onClose={handleClose}>
    {({ isEntered }) => (
      <CSSTransition
        classNames={{
          enter: styles.RootAnimateEnter,
          enterActive: styles.RootAnimateEnterActive
        }}
        in={isEntered}
        timeout={400}
        unmountOnExit
      >
        {(state) => (
          <div
            className={classNames(styles.Root, {
              [styles.RootWithPrice]: !!price
            })}
          >
            <div className={styles.Header}>
              <div className={styles.Title}>Pricing & Plans</div>
              <div className={styles.Choose}>Choose one of this:</div>
            </div>

            <div className={styles.Period}>
              <Tabs onChange={handleChange} value={period}>
                <Tab label="MONTHLY" value={MONTH} />
                <Tab info="Save 25%" label="ANNUALLY" value={YEAR} />
              </Tabs>
            </div>

            <div className={styles.List}>
              <List key={price} isEntered={state === 'entered'} />
            </div>
          </div>
        )}
      </CSSTransition>
    )}
  </Modal>
);

const mapStateToProps: Function = (state: Object) => ({
  period: getPeriod(state),
  price: getPrice(state)
});

export default compose(
  connect(mapStateToProps, { setPeriod, setPrice }),
  withHandlers({
    handleClose: ({ setPrice }): Function => () => setPrice(null),
    handleChange: ({ setPeriod }): Function => (period: string): boolean =>
      setPeriod(period)
  })
)(Plans);
