import classNames from 'classnames';
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Steps.scss';

const STEPS = ['Search', 'Editor', 'Launch'];

const MainHeaderSteps = ({ step }) => (
  <CSSTransition
    classNames={{
      enter: styles.RootAnimateEnter,
      enterActive: styles.RootAnimateEnterActive
    }}
    in={!!step}
    timeout={400}
    unmountOnExit
  >
    {(state: string) => (
      <div className={styles.Root}>
        {STEPS.map((title: string, index: number): func => {
          const stepClassNames = classNames(styles.Step, {
            [styles.StepIsFinished]: step > index + 1,
            [styles.StepIsSelected]: step === index + 1
          });

          return (
            <CSSTransition
              key={index}
              classNames={{
                enter: styles.StepAnimateEnter,
                enterActive: styles.StepAnimateEnterActive
              }}
              in={state === 'entered'}
              timeout={{ enter: 700, exit: 0 }}
              unmountOnExit
            >
              <div
                className={stepClassNames}
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className={styles.Index}>
                  <div className={styles.IndexContent}>{index + 1}</div>
                </div>

                <div className={styles.Title}>{title}</div>
              </div>
            </CSSTransition>
          );
        })}
      </div>
    )}
  </CSSTransition>
);

export default MainHeaderSteps;
