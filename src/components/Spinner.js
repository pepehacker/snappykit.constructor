import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './Spinner.scss';

const Spinner = ({
  className,
  classNames: {
    root: rootClassName,
    spinner: spinnerClassName,
    title: titleClassName
  } = {},
  title
}) => {
  const rootClassNames = classNames(className, rootClassName, styles.Root);
  const spinnerClassNames = classNames(spinnerClassName, styles.Spinner);
  const titleClassNames = classNames(titleClassName, styles.Title);

  return (
    <div className={rootClassNames}>
      <div className={spinnerClassNames} />

      {title && <div className={titleClassNames}>{title}</div>}
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    spinner: PropTypes.string,
    title: PropTypes.string
  }),
  title: PropTypes.string
};

export default Spinner;
