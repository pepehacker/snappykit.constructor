import classNames from 'classnames';
import { get, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import { CSSTransition } from 'react-transition-group';
import { compose, withHandlers, withState } from 'recompose';

// Components
import Field from '../Field';

// Styles
import styles from './Select.scss';

const VARIANT = {
  CONTAINED: 'contained',
  FLAT: 'flat',
};

const FormSelect = ({
  // props
  children,
  id,
  name,
  placeholder,
  value,
  variant = VARIANT.CONTAINED,

  // Handlers
  getLabel,
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
    [styles.RootVariantFlat]: variant === VARIANT.FLAT,
    [styles.RootVariantContained]: variant === VARIANT.CONTAINED,
  });

  return (
    <div
      ref={registerRoot}
      className={rootClassNames}
      onBlur={handleBlur}
      onFocus={handleFocus}
      tabIndex={0}
    >
      <div className={styles.Container}>
        <div className={styles.Control}>
          <input
            ref={registerInput}
            autoComplete="off"
            className={styles.Input}
            onChange={handleChange}
            placeholder={isEmpty(value) ? placeholder : ''}
            size={(inputValue.length || 6) + 2}
            type="text"
            value={isFocused ? inputValue : getLabel()}
          />

          {variant === VARIANT.CONTAINED && <div className={styles.Trigger} />}
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
          {placeholder && <div className={styles.Placeholder}>
            {placeholder}
          </div>}

          <div className={styles.List}>
            {typeof children === 'function'
              ? children({
                inputValue: inputValue.toLowerCase(),
                onClick: handleCreate,
                value: get(value, 'value'),
              })
              : Children.map(
                children,
                child =>
                  child &&
                    get(child, 'props.label')
                      .toLowerCase()
                      .indexOf(inputValue.toLowerCase()) > -1 &&
                    cloneElement(child, {
                      isCurrent: get(child, 'props.value') === get(value, 'value', value),
                      onClick: handleCreate,
                    }),
              )}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

FormSelect.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      }),
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
      getLabel: ({ children, value }) => () =>
        typeof value === 'string'
          ? Children.map(children, (child: Object) => child)
            .filter(({ props }) => get(props, 'value') === value)
            .map(({ props }) => get(props, 'label'))[0] || ''
          : get(value, 'value', ''),

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
      handleCreate: ({ onChange, setFocus }) => (itemValue: Object) => {
        $input.blur();
        setFocus(false);

        onChange && onChange(itemValue);
      },
      handleDelete: ({ onChange, value }) => (itemValue: ?string) =>
        onChange && onChange(value.filter(({ value }) => value !== itemValue)),
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
