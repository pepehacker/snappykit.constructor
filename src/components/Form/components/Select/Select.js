import classNames from 'classnames';
import { get, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { compose, withHandlers, withState } from 'recompose';

// Components
import Field from '../Field';

// Styles
import styles from './Select.scss';

const FormSelect = ({
  // props
  children,
  id,
  name,
  placeholder,
  value,
  variant,

  // Handlers
  handleBlur,
  handleChange,
  handleCreate,
  handleFocus,

  // Registers
  registerInput,
  registerRoot,

  // State
  inputValue,
  isFocused,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsFocused]: !!isFocused,
    [styles.RootIsEmpty]: !!isEmpty(value),

    // Variant
    [styles.RootVariantFlat]: true,
  });

  return (
    <div
      className={rootClassNames}
      onBlur={handleBlur}
      onFocus={handleFocus}
      ref={registerRoot}
      tabIndex={0}
    >
      <div className={styles.Container}>
        <div className={styles.Control}>
          <input
            autoComplete="off"
            className={styles.Input}
            id={id}
            name={name}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder={isEmpty(value) ? placeholder : ''}
            ref={registerInput}
            size={(inputValue.length || 6) + 2}
            type="text"
            value={isFocused
              ? inputValue
              : get(value, 'label', '')
            }
          />

          {/* <div className={styles.Trigger} />  */}
        </div>
      </div>

      <CSSTransition
        classNames={{
          enter: styles.DropdownAnimateEnter,
          enterActive: styles.DropdownAnimateEnterActive,
          exit: styles.DropdownAnimateExit,
          exitActive: styles.DropdownAnimateExitActive,
        }}
        in={children && isFocused}
        timeout={400}
        unmountOnExit
      >
        <div className={styles.Dropdown}>
          {placeholder && (
            <div className={styles.Placeholder}>
              {placeholder}
            </div>
          )}

          <div className={styles.List}>
            {children({
              value,
              inputValue: inputValue.toLowerCase(),
              onClick: handleCreate,
            })}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

FormSelect.propTypes = {
  children: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
    PropTypes.string,
  ]),
};

const ComposedFormSelect = compose(
  withState('isFocused', 'setFocus', false),
  withState('inputValue', 'setInputValue', ''),
  withHandlers(() => {
    let $input;
    let $root;

    return {
      // Handlers
      handleBlur: ({ setFocus, setInputValue }) => (event: Object) => {
        if (!$root.contains(event.relatedTarget)) {
          $input.blur();

          setFocus(false);
          setInputValue('');
        }
      },
      handleChange: ({ setInputValue }) => (event: Object) =>
        setInputValue(get(event, 'target.value', '')),
      handleCreate: ({ onChange, setFocus, value }) => (itemValue: Object) => {
        $input.blur();
        setFocus(false);

        onChange && onChange(itemValue);
      },
      handleDelete: ({ onChange, value }) => (itemValue: ?string) =>
        onChange && onChange(value.filter(({ value }) => value !== itemValue )),
      handleFocus: ({ setFocus }) => () => {
        $input.focus();
        setFocus(true);
      },

      // Registers
      registerRoot: () => (node: HTMLElement) => {
        $root = node;
      },
      registerInput: () => (node: HTMLElement) => {
        $input = node;
      },
    };
  }),
)(FormSelect);

export default ({ children, ...props }) => (
  <Field {...props}>
    <ComposedFormSelect>
      {children}
    </ComposedFormSelect>
  </Field>
);
