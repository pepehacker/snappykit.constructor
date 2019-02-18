import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Entities
import { BACKGROUND, VIEW } from 'entities/template/constants';

// Template
import {
  getSectionById,
  TemplateContext
} from 'template';

// Styles
import styles from './Background.scss';

const TemplateBackground = ({
  className,
  children,
  id,
}) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const rootClassNames = classNames(className, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET,
      });

      const {
        color,
        gradient: {
          angle,
          from,
          to,
        } = {}
      } = getSectionById(data, id || BACKGROUND);

      return (
        <div
          className={rootClassNames}
          style={{
            backgroundColor: color,
            backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
          }}
        >
          {children}
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
