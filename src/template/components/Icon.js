import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Template
import {
  // Config
  ICON,
  VIEW,
  // Provider
  TemplateContext,
  // Selectors
  getSectionById,
} from 'template';

// Styles
import styles from './Icon.scss';

const TemplateIcon = ({
  className,
  classNames: { root: rootClassName, icon: iconClassName } = {},
  id,
}) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const { src } = getSectionById(data, id || ICON);

      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET,
      });

      const iconClassNames = classNames(iconClassName, styles.Icon);

      return (
        <div className={rootClassNames}>
          <Link to={`/${websiteId}/editor/icon${(id && `/${id}`) || ''}`}>
            <div className={styles.Container}>
              <img alt="Icon logo" className={iconClassNames} src={src} />
            </div>
          </Link>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateIcon.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    icon: PropTypes.string,
  }),
  id: PropTypes.string,
};

export default TemplateIcon;
