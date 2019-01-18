import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Entities
import {
  STORE,
  STORE_APP_STORE,
  STORE_GOOGLE_PLAY,
  VIEW,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Item.scss';

const StoreButton = ({
  background,
  color,
  isEditor = true,
  variant = STORE_APP_STORE,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
    [styles.RootViewTablet]: view === VIEW.TABLET,
  });

  const iconClassNames = classNames(styles.Icon, 'fab', {
    'fa-apple': variant === STORE_APP_STORE,
    'fa-google-play': variant === STORE_GOOGLE_PLAY,
  });

  const ButtonComponent = isEditor ? 'div' : 'a';

  return (
    <ButtonComponent {...(isEditor && { href: '/#' })}
      className={rootClassNames}
      style={{ background }}
    >
      <i
        className={iconClassNames}
        style={{ color }}
      />

      <div className={styles.Info}>
        {view === VIEW.DESKTOP && (
          <div
            className={styles.Download}
            style={{ color }}
          >
            Download it from
          </div>
        )}

        <div
          className={styles.Title}
          style={{ color }}
        >
          {variant === STORE_APP_STORE && 'App Store'}
          {variant === STORE_GOOGLE_PLAY && 'Google Play'}
        </div>
      </div>
    </ButtonComponent>
  );
};

StoreButton.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  isEditor: PropTypes.bool,
  variant: PropTypes.oneOf([STORE_APP_STORE, STORE_GOOGLE_PLAY]),
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE, VIEW.TABLET]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, STORE);

export default connect(mapStateToProps)(StoreButton);
