import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Button from './components/Button';
import Link from '../Link';

// Template
import {
  // Config
  STORE,
  STORE_APP_STORE,
  STORE_GOOGLE_PLAY,
  VIEW,
  // Provider
  TemplateContext,
  // Selectors
  getSectionById,
} from 'template';

// Styles
import styles from './Store.scss';

const TemplateStore = ({ className, id }) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const { items, ...props } = getSectionById(data, id || STORE);

      const rootClassNames = classNames(className, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
        [styles.RootViewTablet]: view === VIEW.TABLET,
      });

      return (
        <div className={rootClassNames}>
          <Link to={`/${websiteId}/editor/store${(id && `/${id}`) || ''}`}>
            <div className={styles.Container}>
              {get(items, STORE_APP_STORE) && (
                <Button
                  {...props} variant={STORE_APP_STORE}
                  view={view}
                />
              )}

              {get(items, STORE_GOOGLE_PLAY) && (
                <Button
                  {...props} variant={STORE_GOOGLE_PLAY}
                  view={view}
                />
              )}
            </div>
          </Link>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateStore.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default TemplateStore;
