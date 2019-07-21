import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Field from './Field';

// Style
import style from './Textarea.scss';

const FormTextarea = ({
  className,
  classNames: { textarea: textareaClassName } = {},
  id,
  name,
  onChange,
  readOnly,
  type = 'text',
  value,
}) => {
  const rootClassNames: string = classNames(className, style.Root, {
    [style.RootIsReadOnly]: readOnly,
  });
  const textareaClassNames: string = classNames(
    textareaClassName,
    style.Textarea,
  );

  return (
    <div className={rootClassNames}>
      <textarea
        autoComplete="off"
        className={textareaClassNames}
        id={id}
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
        value={value}
      />
    </div>
  );
};

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
