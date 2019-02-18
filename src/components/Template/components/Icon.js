import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Entities
import { ICON, VIEW } from 'entities/template/constants';

// Template
import {
  getSectionById,
  TemplateContext
} from 'template';

// Styles
import styles from './Icon.scss';

const TemplateIcon = ({
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

      const { icon } = getSectionById(data, id || ICON);

      return (
        <div className={rootClassNames}>
          <Link to={`/${websiteId}/editor/icon${(id && `/${id}`) || ''}`}>
            <div className={styles.Container}>
              <img
                alt="Icon logo"
                className={styles.Icon}
                src={icon}
              />
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

