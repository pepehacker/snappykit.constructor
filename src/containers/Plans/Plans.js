// @flow
import React from 'react';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

// Components
import Modal from 'components/Modal';

// Containers
import List from './containers/List';
import PriceList from './containers/PriceList';

// Ducks
import { getPrice, PLANS_MODAL_ID } from './ducks';

// Styles
import styles from './Plans.scss';

type PlansType = {
  price: string,
};

const Plans = ({ price }: PlansType): React.Element<Modal> => (
  <Modal id={PLANS_MODAL_ID}>
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
          <div className={styles.Root}>
            {!price && (
              <div className={styles.Header}>
                <div className={styles.Title}>Pricing & Plans</div>
                <div className={styles.Description}>Freedom of cost. Pay as you can.</div>
                <div className={styles.Choose}>Choose one of this:</div>
              </div>
            )}

            <PriceList isEntered={state === 'entered'} />
            <List key={price} isEntered={state === 'entered' && !!price} />
          </div>
        )}
      </CSSTransition>
    )}
  </Modal>
);

const mapStateToProps: Function = (state: Object) => ({
  price: getPrice(state),
});

export default connect(mapStateToProps)(Plans);
