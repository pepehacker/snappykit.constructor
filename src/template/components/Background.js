import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Template
import {
  // Constants
  BACKGROUND,
  VIEW,
  // Provider
  TemplateContext,
  // Selector
  getSectionById,
} from 'template';

// Styles
import styles from './Background.scss';

const TemplateBackground = ({
  className,
  classNames: { root: rootClassName, container: containerClassName } = {},
  children,
  id,
}) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET,
      });

      const containerClassNames = classNames(containerClassName, styles.Container);

      const { color, gradient: { angle, from, to } = {}, image } = getSectionById(
        data,
        id || BACKGROUND,
      );

      return (
        <div className={rootClassNames}>
          {image && (
            <div
              className={styles.Cover}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }}
            />
          )}

          {color && (
            <div
              className={styles.Cover}
              style={{
                backgroundColor: color,
              }}
            />
          )}

          {from && to && (
            <div
              className={styles.Cover}
              style={{
                backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
              }}
            />
          )}

          <div className={containerClassNames}>
            {children}
          </div>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
};

export default TemplateBackground;
