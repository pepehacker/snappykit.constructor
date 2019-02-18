import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Entities
import { TEXT, VIEW } from 'entities/template/constants';

// Template
import {
  getSectionById,
  TemplateContext
} from 'template';

// Styles
import styles from './Text.scss';

const TemplateText = ({
  className,
  id,
}) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const rootClassNames = classNames(className, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET,
      });

      const { color, font, style, text } = getSectionById(data, id || TEXT);

      return (
        <div
          className={rootClassNames}
          style={{
            color,
            fontFamily: `'${font}', sans-serif`,
            fontWeight: style,
          }}
        >
          <Link to={`/${websiteId}/editor/text${(id && `/${id}`) || ''}`}>
            {text}
          </Link>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateText.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default TemplateText;
