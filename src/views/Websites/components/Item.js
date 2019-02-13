import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import styles from './Item.scss';

const WebsitesItem = ({
  description,
  id,
  isSupported,
  logo,
  title,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsNotSupported]: !isSupported,
  });

  return (
    <div className={rootClassNames}>
      <div className={styles.Header}>
        <div className={styles.HeaderLeft} />

        <div className={styles.HeaderRight}>
          <button
            className={styles.Delete}
            type="button"
          />
        </div>
      </div>

      <div className={styles.Logo}>
        <img
          alt={title}
          className={styles.Icon}
          src={logo}
        />
      </div>

      <div className={styles.Content}>
        <div className={styles.Title}>
          {title}
        </div>

        <div className={styles.Description}>
          {description}
        </div>
      </div>

      <div className={styles.Actions}>
        {isSupported ? (
          <div>123</div>
        ) : (
          <div className={styles.NotSupported}>
            Not Supported
          </div>
        )}
      </div>
    </div>
  );
}

WebsitesItem.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
  isSupported: PropTypes.bool,
  logo: PropTypes.string,
  title: PropTypes.string,
};

export default WebsitesItem;
