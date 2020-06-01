import classNames from 'classnames';
import { keys } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Item from './components/Item';
import Link from '../Link';

// Template
import {
  // Config
  SOCIAL,
  VIEW,
  // Provider
  TemplateContext,
  // Selectors
  getSectionById
} from 'template';

// Styles
import styles from './Social.scss';

const TemplateSocial = ({ className, id }) => (
  <TemplateContext.Consumer>
    {({ data, isEditor, view, websiteId }) => {
      const { color, items } = getSectionById(data, id || SOCIAL);

      const rootClassNames = classNames(className, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET,

        [styles.RootIsNotEditor]: !isEditor
      });

      return (
        <div className={rootClassNames}>
          <Link to={`/${websiteId}/editor/social${(id && `/${id}`) || ''}`}>
            <div className={styles.Container}>
              {keys(items).map(
                (id: string): func =>
                  !!items[id] && (
                    <Item
                      key={id}
                      color={color}
                      isEditor={isEditor}
                      link={items[id]}
                      variant={id}
                    />
                  )
              )}
            </div>
          </Link>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateSocial.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

export default TemplateSocial;
