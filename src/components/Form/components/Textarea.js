import PropTypes from 'prop-types';
import React from 'react';

// Components
import Field from './Field';

// Styles
import styles from './Textarea.scss';

const FormTextarea = ({
  id,
  name,
  onChange,
  type = 'text',
  value,
}) => (
  <div className={styles.Root}>
    <textarea
      autoComplete="off"
      className={styles.Textarea}
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
  </div>
);

FormTextarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default (props: Object) => (
  <Field {...props}>
    <FormTextarea />
  </Field>
);
