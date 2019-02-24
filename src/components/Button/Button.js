/* eslint-disable */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './Button.scss';

const VARIANT = {
  GRADIENT: 'gradient',
};

const Button = ({
  children,
  className,
  classNames: {
    root: rootClassName,
    content: contentClassName,
    icon: iconClassName,
  } = {},
  icon,
  onClick,
  type = 'button',
  variant = VARIANT.GRADIENT,
}) => {
  const rootClassNames = classNames(className, rootClassName, styles.Root, {
    [styles.RootVariantGradient]: variant === VARIANT.GRADIENT,
  });
  const contentClassNames = classNames(contentClassName, styles.Content);
  const iconClassNames = classNames(rootClassName, styles.Icon);

  return (
    <button
      className={rootClassNames}
      onClick={onClick}
      type={type}
    >
      {icon && <i className={iconClassNames} />}
      {children && (
        <div className={contentClassNames}>
          {children}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.string,
  }),
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    VARIANT.GRADIENT,
    VARIANT.GRADIENT_SECONDARY,
  ]),
};

Button.VARIANT = VARIANT;

export default Button;
