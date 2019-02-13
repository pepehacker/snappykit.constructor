import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Styles
import styles from './Item.scss';

const FormSelectItem = ({
  label,
  value,

  // Handlers
  handleClick,

  // State
  isCurrent,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsCurrent]: isCurrent,
  });

  return (
    <div
      className={rootClassNames}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {label}
    </div>
  );
}

FormSelectItem.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default compose(
  withHandlers({
    handleClick: ({ label, onClick, value }) => (event: Object) =>
      onClick && onClick({ label, value }, event),
  }),
)(FormSelectItem);
