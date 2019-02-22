import PropTypes from 'prop-types';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Styles
import styles from './Item.scss';

const SearchItem = ({
  description,
  id,
  logo,
  title,

  // Handlers
  handleClick,
}) => (
  <div
    className={styles.Root}
    onClick={handleClick}
    role="button"
    tabIndex={0}
  >
    <div className={styles.Left}>
      <img
        alt={123}
        className={styles.Icon}
        src={logo}
      />
    </div>

    <div className={styles.Right}>
      <div className={styles.Title}>
        {title}
      </div>

      <div className={styles.Description}>
        {description}
      </div>
    </div>
  </div>
);

SearchItem.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  logo: PropTypes.string,
  // eslint-disable-next-line
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default compose(
  withHandlers({
    handleClick: ({ onClick, ...props }): func =>
      (event: Object): void =>
        onClick && onClick(props),
  }),
)(SearchItem);
