import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Assets
import uploadScreenshotsImg from 'assets/upload-screenshot.jpg';

// Components
import Smartphone from 'components/Smartphone';
import Link from './Link';

// Template
import {
  SCREENSHOTS,
  SMARTPHONE,
  TemplateContext,
  getSectionById
} from 'template';

// Styles
import styles from './Smartphone.scss';

const TemplateSmartphone = ({
  className,
  classNames: { root: rootClassName } = {},
  id,
  screenshotsId
}) => (
  <TemplateContext.Consumer>
    {({ data, websiteId }) => {
      const { color, model, style } = getSectionById(data, id || SMARTPHONE);

      const {
        items: [src]
      } = getSectionById(data, screenshotsId || SCREENSHOTS);

      return (
        <div className={classNames(className, rootClassName, styles.Root)}>
          <Link
            className={styles.Link}
            to={`/${websiteId}/editor/smartphone${(id && `/${id}`) || ''}`}
          >
            <Smartphone
              color={color}
              id={id}
              model={model}
              src={src || uploadScreenshotsImg}
              style={style}
            />
          </Link>

          <Link
            className={styles.Screenshots}
            to={`/${websiteId}/editor/screenshots${
              (screenshotsId && `/${screenshotsId}`) || ''
            }`}
          />
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateSmartphone.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    mockup: PropTypes.string
  }),
  id: PropTypes.string
};

export default TemplateSmartphone;
