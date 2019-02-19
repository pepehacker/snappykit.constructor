import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';

// Styles
import styles from './Image.scss';

const Image = ({
  children,
  className,
  handleClick,
  value,
}) => {
  const rootClassNames = classNames(className, styles.Root);

  return (
    <div className={rootClassNames}>
      {Children.map(children, child => child && cloneElement(child, {
        isSelected: get(child, 'props.value') === value,
        onClick: handleClick,
      }))}
    </div>
  );
};

Image.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
};

const ComposedImage = compose(
  withHandlers({
    handleClick: ({ onChange }): func =>
      (value: Object): void =>
        onChange && onChange(value),
  }),
)(Image);

export default ({ children, ...props }): func => (
  <Field {...props}>
    <ComposedImage>
      {children}
    </ComposedImage>
  </Field>
);
