import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Entities
import {
  STORE_APP_STORE,
  STORE_GOOGLE_PLAY,
  VIEW,
} from 'entities/template/constants';

// Styles
import styles from './Button.scss';

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

export default StoreButton;
