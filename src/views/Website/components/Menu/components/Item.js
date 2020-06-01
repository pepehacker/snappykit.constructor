import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Item.scss';

const ICON = {
  BACKGROUND: 'background',
  DOMAIN: 'domain',
  ICON: 'icon',
  SCREENSHOTS: 'screenshots',
  SMARTPHONE: 'smartphone',
  SOCIAL: 'social',
  STORE: 'store',
  TEMPLATES: 'templates',
  TEXT: 'text'
};

const WebsiteMenuItem = ({
  className: classNameProp,
  icon = ICON.TEMPLATES,
  title,
  to
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootIconBackground]: icon === ICON.BACKGROUND,
    [styles.RootIconDomain]: icon === ICON.DOMAIN,
    [styles.RootIconIcon]: icon === ICON.ICON,
    [styles.RootIconScreenshots]: icon === ICON.SCREENSHOTS,
    [styles.RootIconSmartphone]: icon === ICON.SMARTPHONE,
    [styles.RootIconSocial]: icon === ICON.SOCIAL,
    [styles.RootIconStore]: icon === ICON.STORE,
    [styles.RootIconTemplates]: icon === ICON.TEMPLATES,
    [styles.RootIconText]: icon === ICON.TEXT
  });

  return (
    <NavLink activeClassName={styles.RootActive} className={className} to={to}>
      <div className={styles.Cover}>
        <div className={styles.Icon} />
      </div>

      <div className={styles.Title}>{title}</div>
    </NavLink>
  );
};

WebsiteMenuItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string
};

WebsiteMenuItem.ICON = ICON;

export default WebsiteMenuItem;
export { ICON };
