import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import { compose, withState } from 'recompose';
import { Field } from 'redux-form';

// Components
import Pro from 'components/Pro';

// Utils
import reduxFieldAdapter from '../utils/reduxFieldAdapter';

import styles from './Field.scss';

const FormField = ({
  children,
  className: classNameProps,
  id,
  isPro,
  ...props
}) => {
  const className = classNames(classNameProps, styles.Root, {
    [styles.RootIsPro]: isPro
  });
  const { max } = props;

  return (
    <Field {...props} component={reduxFieldAdapter}>
      {({ label, readOnly, ...props }): React.Element<'div'> => {
        const { error, value = '' } = props;
        const length = value.length || 0;
        const childProps = {
          ...props,
          id,
          isPro,
          readOnly: readOnly || isPro
        };

        return (
          <div className={className}>
            {(label || max || error) && (
              <div className={styles.Header}>
                <label className={styles.Label} htmlFor={id}>
                  {label}
                </label>

                <div className={styles.Right}>
                  {error && (
                    <div className={styles.Error}>
                      <div className={styles.ErrorIcon} />
                      {error}
                    </div>
                  )}

                  {!error && isPro && <Pro className={styles.Pro} />}

                  {!isPro && !error && max && max - length < max * 0.3 && (
                    <div
                      className={classNames(styles.Max, {
                        [styles.MaxIsEnds]: max - length <= max * 0.1
                      })}
                    >
                      {max - length}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className={styles.Control}>
              {typeof children === 'function'
                ? children(childProps)
                : cloneElement(children, childProps)}
            </div>
          </div>
        );
      }}
    </Field>
  );
};

FormField.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default compose(withState('id', 'setId', ({ name }) => name))(FormField);
