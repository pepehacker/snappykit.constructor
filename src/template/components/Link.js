import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Template
import { TemplateContext } from 'template';

// Styles
import styles from './Link.scss';

const TemplateLink = ({ children, className, exact, to }) => (
  <TemplateContext.Consumer>
    {({ isEditor }) => {
      const rootClassNames = classNames(className, styles.Root);

      return isEditor ? (
        <NavLink
          activeClassName={styles.RootIsActive}
          className={rootClassNames}
          exact={exact}
          to={to}
        >
          <div className={styles.Border} />
          <div className={styles.Black} />
          <div className={styles.Content}>{children}</div>
        </NavLink>
      ) : (
        children
      );
    }}
  </TemplateContext.Consumer>
);

TemplateLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

export default TemplateLink;
