// @flow
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

// Components
import Plan from '../components/Item';

// Data
import PLANS from '../data/plans';

// Styles
import styles from './List.scss';

type PlansListType = {
  isEntered: boolean
};

const PlansList = ({
  isEntered,
  period
}: PlansListType): React.Element<'div'> => (
  <div className={styles.Root}>
    {PLANS.map((plan: Object, index: number): React.Element<typeof Plan> => (
      <CSSTransition
        key={index}
        classNames={{
          enter: styles.ItemAnimateEnter,
          enterActive: styles.ItemAnimateEnterActive
        }}
        in={isEntered}
        timeout={400 + PLANS.length * 100}
        unmountOnExit
      >
        <div
          className={styles.Item}
          style={{ transitionDelay: `${0.1 * index}s` }}
        >
          <Plan {...plan} key={index} />
        </div>
      </CSSTransition>
    ))}
  </div>
);

export default PlansList;
