import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Field from './Field';

// Styles
import styles from './Input.scss';

const VARIANT = {
  CONTAINED: 'contained',
  FLAT: 'flat',
};

const FormInput = ({
  id,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
  variant = VARIANT.CONTAINED,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootVariantContained]: variant === VARIANT.CONTAINED,
    [styles.RootVariantFlat]: variant === VARIANT.FLAT,
  });

  return (
    <div className={rootClassNames}>
      <input
        autoComplete="off"
        className={styles.Input}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

FormInput.VARIANT = VARIANT;

export default ({ variant, ...props }): func => (
  <Field {...props}>
    <FormInput variant={variant} />
  </Field>
);
export { VARIANT };
