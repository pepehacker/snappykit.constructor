import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Entities
import {
  // Config
  POLICY,
  POLICY_PRIVACY,
  POLICY_TERMS,
  VIEW,
  // Provider
  TemplateContext,
  // Selectors
  getSectionById,
} from 'template';

// Styles
import styles from './Policy.scss';

const TemplatePolicy = ({
  className,
  classNames: { root: rootClassName, container: containerClassName, link: linkClassName } = {},
  id,
}) => (
  <TemplateContext.Consumer>
    {({ data, isEditor, view, websiteId }) => {
      const { color, font, items, style } = getSectionById(data, id || POLICY);

      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,

        [styles.RootIsNotEditor]: !isEditor,
      });

      const containerClassNames = classNames(containerClassName, styles.Container);
      const linkClassNames = classNames(linkClassName, styles.Link);

      return (
        <div className={rootClassNames}>
          {(get(items, POLICY_PRIVACY) || get(items, POLICY_TERMS)) && (
            <Link to={`/${websiteId}/editor/text/${(id && `${id}`) || POLICY}`}>
              <div
                className={containerClassNames}
                style={{
                  color,
                  fontFamily: `'${font}', sans-serif`,
                  fontWeight: style,
                }}
              >
                {get(items, POLICY_PRIVACY) && <div className={linkClassNames}>Privacy</div>}

                {get(items, POLICY_TERMS) && <div className={linkClassNames}>Terms</div>}
              </div>
            </Link>
          )}
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplatePolicy.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default TemplatePolicy;
