import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Components
import { Field } from 'components/Form';

import styles from './Link.scss';

const FormLink = ({
  // Props
  icon,
  isPro,
  label,
  name,
  onChange,
  value,

  // Handlers
  handleDropdownBlur,
  handleKeyDown,
  handleReset,
  handleTriggerClick,

  // Registers
  registerDropdown,

  // State
  isOpened,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsFilled]: !!value,
    [styles.RootIsOpened]: !!isOpened,
    [styles.RootIsPro]: !!isPro,
  });

  const iconClassNames = classNames(styles.Icon, 'fab', icon);

  return (
    <div className={rootClassNames}>
      <div
        className={styles.Trigger}
        onClick={handleTriggerClick}
        role="button"
        tabIndex={0}
      >
        <i className={iconClassNames} />

        <div className={styles.Info}>
          <div className={styles.Label}>
            {label}
          </div>

          <div className={styles.Value}>
            {value}
          </div>
        </div>

        {isPro ? (
          <div className={styles.Pro}>
            Pro
          </div>
        ) : (
          <button
            className={styles.Plus}
            onClick={handleReset}
            type="button"
          />
        )}
      </div>

      <div
        className={styles.Dropdown}
        onBlur={handleDropdownBlur}
        ref={registerDropdown}
        role="listbox"
        tabIndex={0}
      >
        {isOpened && (
          <input
            autoFocus
            className={styles.Input}
            name={name}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            type="text"
            value={value}
          />
        )}
      </div>
    </div>
  );
};

FormLink.propTypes = {
  isPro: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

const ComposedFormLink = compose(
  withState('isBusied', 'setBusy', false),
  withState('isOpened', 'setOpen', false),
  withHandlers(() => {
    let dropdownRef;

    return {
      handleDropdownBlur: ({ setBusy, setOpen }) => (event: Object): void => {
        if (!dropdownRef.contains(event.relatedTarget)) {
          setBusy(true);
          setOpen(false);

          setTimeout(() => setBusy(false), 200);
        }
      },
      handleKeyDown: ({ setOpen }): func => (event: Object): bool =>
        event.keyCode === 13 && setOpen(false),
      handleReset: ({ isOpened, onChange, value }) => (event: Object): void => {
        if (!isOpened && value) {
          event.stopPropagation();
          onChange && onChange('');
        }
      },
      handleTriggerClick: ({ isBusied, isOpened, isPro, setOpen }): func => (): bool =>
        !isBusied && !isPro && setOpen(!isOpened),

      // Registers
      registerDropdown: () => (node: HTMLElement): void => {
        dropdownRef = node;
      },
    };
  }),
)(FormLink);

export default ({ label, ...props }) => (
  <Field {...props} label={undefined}>
    <ComposedFormLink label={label} />
  </Field>
);
