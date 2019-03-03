import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Field from './Field';

// Styles
import styles from './Textarea.scss';

const FormTextarea = ({
  classNames: {
    textarea: textareaClassName,
  } = {},
  id,
  name,
  onChange,
  type = 'text',
  value,
}) => {
  const textareaClassNames = classNames(textareaClassName, styles.Textarea);

  return (
    <div className={styles.Root}>
      <textarea
        autoComplete="off"
        className={textareaClassNames}
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
}

FormTextarea.propTypes = {
  classNames: PropTypes.shape({
    textarea: PropTypes.string,
  }),
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
