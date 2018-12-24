import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Text.scss';

const Text = ({
  children,
  className,
}) => {
  const rootClassNames = classNames(styles.Root, className);

  return (
    <div className={rootClassNames}>
      {children}
    </div>
  );
};

export default Text;
