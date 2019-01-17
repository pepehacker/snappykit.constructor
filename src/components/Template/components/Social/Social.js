import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Item from './components/Item';
import Link from '../Link';

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
import styles from './Social.scss';

const TemplateSocial = ({
  className,
  items,
  isEditor = true,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
  });

  return (
    <div className={rootClassNames}>
      <Link to="/1/editor/social">
        <div className={styles.Container}>
          {get(items, SOCIAL_FACEBOOK) && <Item id={SOCIAL_FACEBOOK} view={view} />}
          {get(items, SOCIAL_INSTAGRAM) && <Item id={SOCIAL_INSTAGRAM} view={view} />}
          {get(items, SOCIAL_TWITTER) && <Item id={SOCIAL_TWITTER} view={view} />}
          {get(items, SOCIAL_VK) && <Item id={SOCIAL_VK} view={view} />}
        </div>
      </Link>
    </div>
  );
};

TemplateSocial.propTypes = {
  className: PropTypes.string,
  isEditor: PropTypes.bool,
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, SOCIAL);

export default connect(mapStateToProps)(TemplateSocial);
