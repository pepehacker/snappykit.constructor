import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Field from './Field';

// Styles
import styles from './Input.scss';

const FormInput = ({
  id,
  name,
  onChange,
  type = 'text',
  value,
}) => (
  <div className={styles.Root}>
    <input
      autoComplete="off"
      className={styles.Input}
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default (props: Object) => (
  <Field {...props}>
    <FormInput />
  </Field>
);
