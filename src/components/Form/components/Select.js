import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { Children, createRef } from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Components
import Field from './Field';

import styles from './Select.scss';

const FormSelect = ({
  children,
  handleBlur,
  handleItemClick,
  handleTriggerClick,
  isOpened,
  placeholder,
  rootRef,
  value,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootIsOpened]: !!isOpened,
  });

  return (
    <div
      className={className}
      onBlur={handleBlur}
      ref={rootRef}
      tabIndex={0}
    >
      <div
        className={styles.Trigger}
        onClick={handleTriggerClick}
      >
        {Children.map(children, ({ props }) => {
          const itemLabel = get(props, 'children');
          const itemValue = get(props, 'value');

          return itemValue === value && itemLabel;
        })}

        <button className={styles.TriggerButton} type="button" />
      </div>

      <div className={styles.Dropdown}>
        <div className={styles.Placeholder}>
          {placeholder}
        </div>

        <div className={styles.List}>
          {Children.map(children, ({ props }, index) => {
            const itemValue = get(props, 'value');
            const className = classNames(styles.Item, {
              [styles.ItemIsCurrent]: itemValue === value
            });

            return (
              <div
                aria-hidden
                className={className}
                key={index}
                onClick={() => handleItemClick(itemValue)}
                role="menuitem"
              >
                {get(props, 'children')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

FormSelect.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.string,
};

const ComposedFormSelect = compose(
  withState('isOpened', 'setOpen', false),
  withState('rootRef', 'setRootRef', createRef()),
  withHandlers({
    handleBlur: ({ rootRef, setOpen }) => event =>
      !rootRef.current.contains(event.relatedTarget) && setOpen(false),
    handleItemClick: ({ onChange, setOpen }) => value => {
      onChange && onChange(value);
      setOpen && setOpen(false);
    },
    handleTriggerClick: ({ isOpened, setOpen }) => () =>
      setOpen && setOpen(!isOpened),
  }),
)(FormSelect);

export default ({ children, ...props }) => (
  <Field {...props}>
    <ComposedFormSelect>
      {children}
    </ComposedFormSelect>
  </Field>
);

export const CustomSelect = ComposedFormSelect;
