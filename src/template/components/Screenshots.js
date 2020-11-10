import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Template
import {
  // Config
  SCREENSHOTS,
  VIEW,
  // Provider
  TemplateContext,
  // Selectors
  getSectionById
} from 'template';

// Styles
import styles from './Screenshots.scss';

const TemplateScreenshots = ({
  className,
  classNames: { root: rootClassName, item: itemClassName } = {},
  id,
  settings,
  variant
}) => (
  <TemplateContext.Consumer>
    {({ data, isEditor, view, websiteId }) => {
      const { items } = getSectionById(data, id || SCREENSHOTS);
      const source = (items || [])[0];

      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET
      });

      return (
        <div className={rootClassNames}>
          <Link
            className={styles.Link}
            to={`/${websiteId}/editor/screenshots${(id && `/${id}`) || ''}`}
          >
            <div className={styles.Container}>
              <img alt="Screenshot" className={styles.Image} src={source} />
            </div>
          </Link>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateScreenshots.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),
  id: PropTypes.string
};

export default TemplateScreenshots;
