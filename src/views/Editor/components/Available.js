import React from 'react';
import { CSSTransition } from 'react-transition-group';

// Styles
import styles from './Available.scss';

const EditorAvailable = ({
  isAvailable,
}) => (
  <CSSTransition
    classNames={{
      enter: styles.RootAnimateEnter,
      enterActive: styles.RootAnimateEnterActive,
      exit: styles.RootAnimateExit,
      exitActive: styles.RootAnimateExitActive,
    }}
    in={!isAvailable}
    timeout={{ enter: 600, exit: 400 }}
    unmountOnExit
  >
    {(): func => (
      <div className={styles.Root}>
        <div className={styles.Cover} />

        <div className={styles.Content}>
          <div className={styles.Icon} />

          <div className={styles.Title}>
            Section is not Available
          </div>

          <div className={styles.Description}>
            The section is not editable<br />
            in this template
          </div>
        </div>
      </div>
    )}
  </CSSTransition>
);

export default EditorAvailable;
