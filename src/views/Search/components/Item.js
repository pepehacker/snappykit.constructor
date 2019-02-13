import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './Item.scss';

const SearchItem = ({
  description,
  id,
  logo,
  title,
}) => (
  <div className={styles.Root}>
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

export default SearchItem;
