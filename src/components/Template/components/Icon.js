import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
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
  const rootClassNames = classNames(className, styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
  });

  return (
    <div className={rootClassNames}>
      <Link to="/1/editor/icon">
        <div className={styles.Container}>
          <img
            alt="Icon logo"
            className={styles.Icon}
            src={icon}
          />
        </div>
      </Link>
    </div>
  );
}

TemplateIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  isEditor: PropTypes.bool,
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE, VIEW.TABLET]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, ICON);

export default connect(mapStateToProps)(TemplateIcon);

