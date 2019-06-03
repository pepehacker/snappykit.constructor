// @flow
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { CSSTransition } from 'react-transition-group';

// Components
import Modal from 'components/Modal';

// Containers
import List from './containers/List';
import PriceList from './containers/PriceList';

// Ducks
import { getPrice, setPrice, PLANS_MODAL_ID } from './ducks';

// Styles
import styles from './Plans.scss';

type PlansType = {
  handleClose: Function,
  price: string,
};

const Plans = ({ handleClose, price }: PlansType): React.Element<Modal> => (
  <Modal id={PLANS_MODAL_ID} onClose={handleClose}>
    {({ isEntered }) => (
      <CSSTransition
        classNames={{
          enter: styles.RootAnimateEnter,
          enterActive: styles.RootAnimateEnterActive,
        }}
        in={isEntered}
        timeout={400}
        unmountOnExit
      >
        {state => (
          <div
            className={classNames(styles.Root, {
              [styles.RootWithPrice]: !!price,
            })}
          >
            <div className={styles.Header}>
              <div className={styles.Title}>Pricing & Plans</div>
              <div className={styles.Description}>Freedom of cost. Pay as you can.</div>
              <div className={styles.Choose}>Choose one of this:</div>
            </div>

            <div className={styles.Price}>
              <PriceList isEntered={state === 'entered'} />
            </div>

            <div className={styles.List}>
              <List key={price} isEntered={state === 'entered' && !!price} />
            </div>
          </div>
        )}
      </CSSTransition>
    )}
  </Modal>
);

const mapStateToProps: Function = (state: Object) => ({
  price: getPrice(state),
});

export default compose(
  connect(
    mapStateToProps,
    { setPrice },
  ),
  withHandlers({
    handleClose: ({ setPrice }): Function => () => setPrice(null),
  }),
)(Plans);
