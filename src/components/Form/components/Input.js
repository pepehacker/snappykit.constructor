import classNames from 'classnames';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Components
import Field from './Field';

// Style
import style from './Input.scss';

const VARIANT = {
  CONTAINED: 'contained',
  FLAT: 'flat'
};

type FormInputPropTypes = {
  id: number | string,
  handleBlur: (SyntheticEvent) => void,
  handleFocus: (SyntheticEvent) => void,
  isFocused: boolean,
  name: string,
  onChange?: (SyntheticEvent) => void,
  placeholder?: string,
  postfix?: string,
  readOnly?: boolean,
  type?: string,
  value?: boolean | number | string,
  variant?: VARIANT.CONTAINED | VARIANT.FLAT
};

const FormInput = ({
  id,
  name,
  placeholder,
  postfix,
  readOnly,
  type = 'text',
  value,
  variant = VARIANT.CONTAINED,
  // Handlers
  handleBlur,
  handleFocus,
  onChange,
  // State
  isFocused
}: FormInputPropTypes): React.Element<'div'> => {
  const rootClassNames = classNames(
    style.Root,
    {
      [style.RootVariantContained]: variant === VARIANT.CONTAINED,
      [style.RootVariantFlat]: variant === VARIANT.FLAT,
      [style.RootVariantWithPostfix]: !!postfix
    },
    {
      [style.RootIsFocused]: isFocused,
      [style.RootIsReadOnly]: readOnly
    }
  );

  return (
    <div className={rootClassNames}>
      <div className={style.Cover}>
        <input
          autoComplete="off"
          className={style.Input}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={onChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          value={value}
        />

        {postfix && <div className={style.Postfix}>{postfix}</div>}
      </div>
    </div>
  );
};

FormInput.VARIANT = VARIANT;

const ComposedFormInput = compose(
  withState('isFocused', 'setFocused', false),
  withHandlers({
    handleBlur: ({ setFocused }): Function => (): void => setFocused(false),
    handleFocus: ({ setFocused }): Function => (): void => setFocused(true)
  })
)(FormInput);

export default ({ variant, ...props }): func => (
  <Field {...props}>
    <ComposedFormInput variant={variant} />
  </Field>
);
export { VARIANT };
