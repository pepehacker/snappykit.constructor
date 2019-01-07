import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Entities
import {
  SOCIAL,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_TWITTER,
  SOCIAL_VK,

  VIEW,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Item.scss';

const TemplateSocialItem = ({
  color,
  id,
  isEditor = true,
  link,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
  });

  const iconClassNames = classNames(styles.Icon, 'fab', `fa-${id}`);

  const ItemComponent = isEditor ? 'div' : 'a';

  return (
    <ItemComponent {...(isEditor && { href: '/#' })}
      className={rootClassNames}
      style={{ color }}
    >
      <i className={iconClassNames} />
    </ItemComponent>
  );
};

TemplateSocialItem.propTypes = {
  color: PropTypes.string,
  id: PropTypes.oneOf([SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM, SOCIAL_TWITTER, SOCIAL_VK]),
  isEditor: PropTypes.bool,
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE]),
};

const mapStateToProps = (state: Object, { id }) => {
  const social = getFieldById(state, SOCIAL);

  return {
    color: get(social, 'color'),
    link: get(social, `items.${id}`),
  };
};

export default connect(mapStateToProps)(TemplateSocialItem);
