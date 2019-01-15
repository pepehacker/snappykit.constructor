import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import styles from './Link.scss';

const TemplateLink = ({
  children,
  className,
  isEditor = true,
  to,
}) => {
  const rootClassNames = classNames(className, styles.Root);

  return isEditor ? (
    <NavLink
      activeClassName={styles.RootIsActive}
      className={rootClassNames}
      to={to}
    >
      <div className={styles.Border} />
      <div className={styles.Content}>
        {children}
      </div>
    </NavLink>
  ) : children;
};

TemplateLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isEditor: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default TemplateLink;
