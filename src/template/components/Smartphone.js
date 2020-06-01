import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Template
import {
  // Config
  SMARTPHONE,
  VIEW,
  // Provider
  TemplateContext,
  // Selectors
  getSectionById
} from 'template';

// Styles
import styles from './Smartphone.scss';

const TemplateSmartphone = ({
  children,
  className,
  classNames: {
    root: rootClassName,
    container: containerClassName,
    mockup: mockupClassName
  } = {},
  id
}) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const { mockup, model } = getSectionById(data, id || SMARTPHONE);

      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET
      });

      const containerClassNames = classNames(
        containerClassName,
        styles.Container
      );
      const mockupClassNames = classNames(mockupClassName, styles.Mockup);

      return (
        <div className={rootClassNames}>
          <Link
            className={styles.Link}
            to={`/${websiteId}/editor/smartphone${(id && `/${id}`) || ''}`}
          >
            <div
              className={mockupClassNames}
              style={{
                backgroundImage: `url(${require(`assets/mockup/${model}/${mockup}.png`)})` /* eslint-disable-line */
              }}
            />
          </Link>

          {children && <div className={containerClassNames}>{children}</div>}
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateSmartphone.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    mockup: PropTypes.string
  }),
  id: PropTypes.string
};

export default TemplateSmartphone;
