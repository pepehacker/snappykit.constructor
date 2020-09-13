/* eslint-disable */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './Button.scss';

const VARIANT = {
  FORM: 'form',
  GRADIENT: 'gradient',
  GRADIENT_REVERSE: 'gradientReverse'
};

const Button = ({
  children,
  className,
  classNames: {
    root: rootClassName,
    content: contentClassName,
    icon: iconClassName
  } = {},
  icon,
  loaded,
  onClick,
  type = 'button',
  variant = VARIANT.GRADIENT
}) => {
  const rootClassNames = classNames(
    className,
    rootClassName,
    styles.Root,
    {
      [styles.RootVariantForm]: variant === VARIANT.FORM,
      [styles.RootVariantGradient]: variant === VARIANT.GRADIENT,
      [styles.RootVariantGradientReverse]: variant === VARIANT.GRADIENT_REVERSE
    },
    {
      [styles.RootIsLoaded]: !!loaded
    }
  );
  const contentClassNames = classNames(contentClassName, styles.Content);
  const iconClassNames = classNames(rootClassName, styles.Icon);

  return (
    <button className={rootClassNames} onClick={onClick} type={type}>
      {loaded ? (
        <i className={classNames(styles.Loader, 'far fa-spinner-third')} />
      ) : (
        <>
          {icon && <i className={iconClassNames} />}
          {children && <div className={contentClassNames}>{children}</div>}
        </>
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
    icon: PropTypes.string
  }),
  icon: PropTypes.string,
  loaded: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    VARIANT.FORM,
    VARIANT.GRADIENT,
    VARIANT.GRADIENT_REVERSE
  ])
};

Button.VARIANT = VARIANT;

export default Button;
