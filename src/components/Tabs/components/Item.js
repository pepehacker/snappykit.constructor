import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Styles
import styles from './Item.scss';

const TabsItem = ({
  children,
  label,
  style,
  value,

  // Handlers
  handleClick,

  // State
  isSelected,
}) => {
  const rootClassNames: Object = classNames(styles.Root, {
    [styles.RootIsSelected]: !!isSelected,
  });

  return (
    <button
      className={rootClassNames}
      onClick={handleClick}
      style={style}
      type="button"
    >
      {label && (
        <div className={styles.Label}>
          {label}
        </div>
      )}

      {typeof children === 'function'
        ? children({ isSelected })
        : children}

      <div className={styles.Divider} />
    </button>
  );
};

TabsItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func, // eslint-disable-line
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default compose(
  withHandlers({
    handleClick: ({ onClick, value }): func =>
      (event: Object): void =>
        onClick && onClick(value, event),
  }),
)(TabsItem);
