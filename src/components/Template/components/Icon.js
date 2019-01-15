import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// Components
import Link from './Link';

// Entities
import { ICON, VIEW } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Icon.scss';

const TemplateIcon = ({
  className,
  icon,
  isEditor = true,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root);
  const LinkComponent = isEditor ? Link : Fragment;

  return (
    <div className={rootClassNames}>
      <LinkComponent {...(isEditor && { to: '/1/editor/icon' })}>
        <div className={styles.Container}>
          <img
            alt="Icon logo"
            className={styles.Icon}
            src={icon}
          />
        </div>
      </LinkComponent>
    </div>
  );
}

TemplateIcon.propTypes = {
  className: PropTypes.string,
  isEditor: PropTypes.bool,
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, ICON);

export default connect(mapStateToProps)(TemplateIcon);

