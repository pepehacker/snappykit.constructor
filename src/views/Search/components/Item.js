import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Ducks
import { selectApp } from '../ducks';

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
  title: PropTypes.string,
};

export default compose(
  connect(null, { selectApp }),
  withHandlers({
    handleClick: ({ id, selectApp }): Function =>
      (event: Object): void =>
        selectApp(id),
  }),
)(SearchItem);
