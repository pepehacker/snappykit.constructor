import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose, withHandlers, withProps } from 'recompose';

// Components
import Spinner from 'components/Spinner';

// Ducks
import { CONFIRM_MODAL_ID } from '../ducks';

// Entities
import {
  deleteWebsite,
  getWebsiteLogo,
} from 'entities/websites';

// Services
import { openModal } from 'services/modals';

// Styles
import styles from './Item.scss';

const WebsitesItem = ({
  description,
  domain,
  id,
  isNew,
  logo,
  title,

  // Handlers
  handleDelete,

  // State
  isFetching,
  isSupported,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsFetching]: isFetching,
    [styles.RootIsNew]: isNew,
    [styles.RootIsNotSupported]: !isSupported,
  });

  return (
    <div className={rootClassNames}>
      {isFetching && <Spinner title="Deleting..." />}

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
              {isNew ? 'Continue' : 'Modify'}
            </Link>

            {!isNew && (
              <a
                className={classNames(styles.Link, styles.LinkExternal)}
                href={`https://${domain}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Open
              </a>
            )}
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
  domain: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  isFetching: PropTypes.bool,
  isSupported: PropTypes.bool,
  logo: PropTypes.string,
  title: PropTypes.string,
};

const mapStateToProps = (state: Object, { id }): Object => ({
  logo: getWebsiteLogo(state, id),
});

export default compose(
  connect(mapStateToProps, { deleteWebsite, openModal }),
  withProps(({ id }) => ({
    isNew: id === 'new',
  })),
  withHandlers({
    handleDelete: ({
      appId,
      deleteWebsite,
      id,
      openModal,
    }): func =>
      (event: Object): void =>
        openModal(CONFIRM_MODAL_ID, {
          onSubmit: () => deleteWebsite({ appId, id }),
        }),
  }),
)(WebsitesItem);
