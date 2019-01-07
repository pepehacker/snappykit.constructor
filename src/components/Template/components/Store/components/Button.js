import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Entities
import { STORE, VIEW } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Button.scss';

const VARIANT = {
  APP_STORE: 'appStore',
  GOOGLE_PLAY: 'googlePlay',
};

const StoreButton = ({
  background,
  color,
  isEditor = true,
  variant = VARIANT.APP_STORE,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootVariantAppStore]: variant === VARIANT.APP_STORE,
    [styles.RootVariantGooglePlay]: variant === VARIANT.GOOGLE_PLAY,

    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
  });

  const iconClassNames = classNames(styles.Icon, 'fab', {
    'fa-apple': variant === VARIANT.APP_STORE,
    'fa-google-play': variant === VARIANT.GOOGLE_PLAY,
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
          {variant === VARIANT.APP_STORE && 'App Store'}
          {variant === VARIANT.GOOGLE_PLAY && 'Google Play'}
        </div>
      </div>
    </ButtonComponent>
  );
};

StoreButton.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  isEditor: PropTypes.bool,
  variant: PropTypes.oneOf([VARIANT.APP_STORE, VARIANT.GOOGLE_PLAY]),
};

StoreButton.VARIANT = VARIANT;

const mapStateToProps = (state: Object) =>
  getFieldById(state, STORE);

export default connect(mapStateToProps)(StoreButton);
