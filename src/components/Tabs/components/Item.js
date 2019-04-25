// @flow
import classNames from 'classnames';
import * as React from 'react';
import { compose, withHandlers } from 'recompose';

// Styles
import styles from './Item.scss';

// Type
import type { TabsItemType } from '../Tabs.type';

const TabsItem = ({
  children,
  label,
  style,
  value,

  // Handlers
  handleClick,

  // State
  isSelected,
}: TabsItemType) => {
  const rootClassNames: Object = classNames(styles.Root, {
    [styles.RootIsSelected]: !!isSelected,
  });

  return (
    <button
      className={rootClassNames} onClick={handleClick}
      style={style} type="button"
    >
      {label && <div className={styles.Label}>
        {label}
      </div>}

      {typeof children === 'function' ? children({ isSelected }) : children}

      <div className={styles.Divider} />
    </button>
  );
};

export default compose(
  withHandlers({
    handleClick: ({ onClick, value }): func => (event: Object): void =>
      onClick && onClick(value, event),
  }),
)(TabsItem);
