import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import { compose, withHandlers } from 'recompose';

// Styles
import styles from './Tabs.scss';

const Tabs = ({ children, className, handleClick, value }) => {
  const rootClassNames = classNames(className, styles.Root);

  return (
    <div className={rootClassNames}>
      {Children.map(
        children,
        (child) =>
          child &&
          cloneElement(child, {
            isSelected: get(child, 'props.value') === value,
            key: get(child, 'props.value'),
            onClick: handleClick,
            style: { flex: `0 0 ${100 / children.length}%` }
          })
      )}

      <div className={styles.Divider} />
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func, // eslint-disable-line
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ])
};

export default compose(
  withHandlers({
    handleClick: ({ onChange }): func => (value: number | string): boolean =>
      onChange && onChange(value)
  })
)(Tabs);
