import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Ducks
import { CONFIRM_MODAL_ID } from '../ducks';

// Services
import { openModal } from 'services/modals';

// Styles
import styles from './Item.scss';

const WebsitesItem = ({
  description,
  id,
  logo,
  title,

  // Handlers
  handleDelete,

  // State
  isSupported,
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
            onClick={handleDelete}
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
          <div className={styles.Links}>
            <Link
              className={styles.Link}
              to={`/${id}/editor/templates`}
            >
              Modify
            </Link>

            <a
              className={classNames(styles.Link, styles.LinkExternal)}
              href="http://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open
            </a>
          </div>
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
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  isSupported: PropTypes.bool,
  logo: PropTypes.string,
  title: PropTypes.string,
};

export default compose(
  connect(null, { openModal }),
  withHandlers({
    handleDelete: ({ id, openModal }): func =>
      (event: Object): void =>
        openModal(CONFIRM_MODAL_ID, {
          onSubmit: console.log, // eslint-disable-line
        }),
  }),
)(WebsitesItem);
