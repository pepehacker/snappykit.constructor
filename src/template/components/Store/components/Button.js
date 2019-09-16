import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Template
import { STORE_APP_STORE, STORE_GOOGLE_PLAY, VIEW } from 'template/config';

// Styles
import styles from './Button.scss';

const VARIANT = {
  V1_ELLIPSE: 'V1_ELLIPSE',
  V1_FLAT: 'V1_FLAT',
  V1_ROUNDED: 'V1_ROUNDED'
};

const StoreButton = ({
  background,
  color,
  isEditor,
  link,
  store = STORE_APP_STORE,
  variant = VARIANT.V1_ELLIPSE,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootVariantV1]: [VARIANT.V1_ELLIPSE, VARIANT.V1_FLAT, VARIANT.V1_ROUNDED].indexOf(variant) > -1,
    [styles.RootVariantV1Ellipse]: variant === VARIANT.V1_ELLIPSE,
    [styles.RootVariantV1Flat]: variant === VARIANT.V1_FLAT,
    [styles.RootVariantV1Rounded]: variant === VARIANT.V1_ROUNDED,
  }, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
    [styles.RootViewTablet]: view === VIEW.TABLET,

    [styles.RootIsView]: !isEditor,
  });

  const iconClassNames = classNames(styles.Icon, 'fab', {
    'fa-apple': store === STORE_APP_STORE,
    'fa-google-play': store === STORE_GOOGLE_PLAY,
  });

  const ButtonComponent = isEditor ? 'div' : 'a';

  return (
    <ButtonComponent
      {...!isEditor && { href: link }}
      className={rootClassNames}
      style={{ background }}
    >
      <i className={iconClassNames} style={{ color }} />

      <div className={styles.Info}>
        {view === VIEW.DESKTOP && (
          <div className={styles.Download} style={{ color }}>
            Download it from
          </div>
        )}

        <div className={styles.Title} style={{ color }}>
          {store === STORE_APP_STORE && 'App Store'}
          {store === STORE_GOOGLE_PLAY && 'Google Play'}
        </div>
      </div>
    </ButtonComponent>
  );
};

StoreButton.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  isEditor: PropTypes.bool,
  store: PropTypes.oneOf([STORE_APP_STORE, STORE_GOOGLE_PLAY]),
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE, VIEW.TABLET]),
};

export default StoreButton;
