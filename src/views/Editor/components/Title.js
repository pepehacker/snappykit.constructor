import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Title.scss';

const EditorTitle = ({
  children,
  className: classNameProp,
  info,
  title,
}) => {
  const className = classNames(classNameProp, styles.Root);

  return (
    <div className={className}>
      <div className={styles.Title}>
        {title || children}
      </div>

      {info && (
        <div className={styles.Info}>
          {info}
        </div>
      )}
    </div>
  );
};

EditorTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  info: PropTypes.string,
  title: PropTypes.node,
};

export default EditorTitle;
