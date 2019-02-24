import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Link from './Link';

// Entities
import {
  POLICY, POLICY_PRIVACY, POLICY_TERMS,
  VIEW,
} from 'entities/template/constants';

// Template
import {
  getSectionById,
  TemplateContext
} from 'template';

// Styles
import styles from './Policy.scss';

const TemplatePolicy = ({
  className,
  classNames: {
    root: rootClassName,
    container: containerClassName,
  } = {},
  id,
}) => (
  <TemplateContext.Consumer>
    {({ data, view, websiteId }) => {
      const { color, font, items, style } = getSectionById(data, id || POLICY);

      const rootClassNames = classNames(className, rootClassName, styles.Root, {
        [styles.RootViewDesktop]: view === VIEW.DESKTOP,
        [styles.RootViewMobile]: view === VIEW.MOBILE,
      });

      const containerClassNames = classNames(containerClassName, styles.Container);

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
                {get(items, POLICY_PRIVACY) && (
                  <div className={styles.Privacy}>
                    Privacy
                  </div>
                )}

                {get(items, POLICY_TERMS) && (
                  <div className={styles.Terms}>
                    Terms
                  </div>
                )}
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
