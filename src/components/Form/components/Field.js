import classNames from 'classnames';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import { compose, withState } from 'recompose';
import { Field } from 'redux-form';

// Utils
import reduxFieldAdapter from '../utils/reduxFieldAdapter';

import styles from './Field.scss';

const FormField = ({
  children,
  className: classNameProps,
  id,
  ...props,
}) => {
  const className = classNames(classNameProps, styles.Root);

  return (
    <Field {...props} component={reduxFieldAdapter}>
      {({ label, ...props }) => (
        <div className={className}>
          <label className={styles.Label} htmlFor={id}>
            {label}
          </label>

          <div className={styles.Control}>
            {cloneElement(children, { ...props, id })}
          </div>
        </div>
      )}
    </Field>
  );
};

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default compose(
  withState('id', 'setId', uniqueId('field_')),
)(FormField);
