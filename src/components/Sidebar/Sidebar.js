// @flow
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Components
import Tabs, { Tab } from 'components/Tabs';

// Styles
import styles from './Sidebar.scss';

// Type
import type { SidebarType } from './Sidebar.type';

const Sidebar = ({
  children,
  currentIndex,
  info,
  handleChange,
  tabs,
  title,
}: SidebarType): React.Element<'div'> => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      {title && (
        <div className={styles.Title}>
          {title}

          {info && <div className={styles.Info}>
            {info}
          </div>}
        </div>
      )}

      {tabs && tabs.length > 0 && (
        <div className={styles.Tabs}>
          <Tabs
            className={styles.Tabs} onChange={handleChange}
            value={currentIndex}
          >
            {tabs.map((item, index) => (
              <Tab
                {...item} key={index}
                value={index}
              />
            ))}
          </Tabs>
        </div>
      )}
    </div>

    <div className={styles.Container}>
      {children}
    </div>
  </div>
);

export default compose(
  withState('currentIndex', 'setCurrentIndex', 0),
  withHandlers({
    handleChange: ({ setCurrentIndex }): Function => (index: number) => setCurrentIndex(index),
  }),
)(Sidebar);
