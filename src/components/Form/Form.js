import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Form.scss';

const Form = ({
  children,
  className: classNameProp,
  classNames: { root: rootClassName, container: containerClassName } = {},
  error,
  onSubmit
}) => (
  <form
    className={classNames(classNameProp, rootClassName, styles.Root)}
    onSubmit={onSubmit}
  >
    <div className={classNames(containerClassName, styles.Container)}>
      {children}
    </div>
  </form>
);

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

export default Form;
