import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Smartphone from 'components/Smartphone';
import Link from './Link';

// Template
import {
  // Config
  SMARTPHONE,
  SMARTPHONE_MOCKUP,
  SMARTPHONE_MODEL,
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
      const { model, src } =
        SMARTPHONE_MOCKUP[
          get(getSectionById(data, id || SMARTPHONE), 'mockup')
        ] || {};

      const rootClassNames = classNames(
        className,
        rootClassName,
        styles.Root,
        {
          [styles.RootViewDesktop]: view === VIEW.DESKTOP,
          [styles.RootViewMobile]: view === VIEW.MOBILE,
          [styles.RootViewTablet]: view === VIEW.TABLET
        },
        {
          [styles.RootModelIPhone11]: model === SMARTPHONE_MODEL.IPHONE_11,
          [styles.RootModelIPhone11Pro]:
            model === SMARTPHONE_MODEL.IPHONE_11_PRO,
          [styles.RootModelIPhoneSE]: model === SMARTPHONE_MODEL.IPHONE_SE,
          [styles.RootModelGalaxyS20]: model === SMARTPHONE_MODEL.GALAXY_S20,
          [styles.RootModelPixel4]: model === SMARTPHONE_MODEL.PIXEL_4
        }
      );

      const containerClassNames = classNames(
        containerClassName,
        styles.Container
      );

      return (
        <div className={rootClassNames}>
          <Link
            className={styles.Link}
            to={`/${websiteId}/editor/smartphone${(id && `/${id}`) || ''}`}
          >
            <Smartphone />
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
