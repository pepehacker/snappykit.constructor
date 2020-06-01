import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Template
import {
  // Config
  TEXT,
  VIEW,
  // Provider
  TemplateContext,
  // Selectors
  getSectionById
} from 'template';

// Styles
import styles from './Text.scss';

const TemplateText = ({
  className,
  classNames: { root: rootClassName, text: textClassName } = {},
  id
}) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const { color, font, style, text } = getSectionById(data, id || TEXT);

      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET
      });

      const textClassNames = classNames(textClassName, styles.Text);

      return (
        <div
          className={rootClassNames}
          style={{
            color,
            fontFamily: `'${font}', sans-serif`,
            fontWeight: style
          }}
        >
          <Link to={`/${websiteId}/editor/text${(id && `/${id}`) || ''}`}>
            <div className={textClassNames}>{text}</div>
          </Link>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateText.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    text: PropTypes.string
  }),
  id: PropTypes.string
};

export default TemplateText;
