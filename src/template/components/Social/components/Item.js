import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Template
import {
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_TWITTER,
  SOCIAL_VK,
  VIEW
} from 'template/config';

// Styles
import styles from './Item.scss';

const TemplateSocialItem = ({ color, isEditor, link, variant, view }) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
    [styles.RootViewTablet]: view === VIEW.TABLET,

    [styles.RootIsNotEditor]: view === isEditor
  });

  const iconClassNames = classNames(styles.Icon, 'fab', `fa-${variant}`);

  const ItemComponent = isEditor ? 'div' : 'a';

  return (
    <ItemComponent
      {...(!isEditor && { href: link })}
      className={rootClassNames}
      style={{ color }}
    >
      <i className={iconClassNames} />
    </ItemComponent>
  );
};

TemplateSocialItem.propTypes = {
  color: PropTypes.string,
  isEditor: PropTypes.bool,
  link: PropTypes.string,
  variant: PropTypes.oneOf([
    SOCIAL_FACEBOOK,
    SOCIAL_INSTAGRAM,
    SOCIAL_TWITTER,
    SOCIAL_VK
  ]),
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE, VIEW.TABLET])
};

export default TemplateSocialItem;
