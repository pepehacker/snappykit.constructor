import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

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
  getSectionById,
} from 'template';

// Styles
import styles from './Screenshots.scss';

const TemplateScreenshots = ({
  className,
  classNames: { root: rootClassName, item: itemClassName } = {},
  id,
  settings,
  variant,
}) => (
  <TemplateContext.Consumer>
    {({ data, isEditor, view, websiteId }) => {
      const { items } = getSectionById(data, id || SCREENSHOTS);
      const source = (items || [])[0];

      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET,
      });

      // const itemClassNames = classNames(itemClassName, styles.Item);

      // const sliderSettings = {
      //   arrows: false,
      //   draggable: false,
      //   dots: false,
      //   infinite: false,
      //   swipe: false,
      //   ...settings,
      // };

      return (
        <div className={rootClassNames}>
          <Link
            to={`/${websiteId}/editor/screenshots${(id && `/${id}`) || ''}`}
          >
            <div className={styles.Container}>
              <img alt="Screenshot" className={styles.Image} src={source} />
              {/* <Slider {...sliderSettings} className={styles.Slider}>
                {(items || []).map((source: stirng, index: number): func => (
                  <div key={index} className={itemClassNames}>
                    <img
                      alt="Screenshot"
                      className={styles.Image}
                      src={source}
                    />
                  </div>
                ))}
              </Slider> */}
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
    root: PropTypes.string,
  }),
  id: PropTypes.string,
};

export default TemplateScreenshots;
