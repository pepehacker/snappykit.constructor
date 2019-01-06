import classNames from 'classnames';
import React, { Fragment } from 'react';

// Components
import Link from './Link';

// Styles
import styles from './Privacy.scss';

const TempaltePrivacy = ({
  className,
  isEditor = true,
}) => {
  const rootClassNames = classNames(className, styles.Root);
  const LinkComponent = isEditor ? Link : Fragment;

  return (
    <div className={rootClassNames}>
      <LinkComponent {...(isEditor && { to: `/1/domain` })}>
        <div className={styles.Container}>
          <div className={styles.Privacy}>
            PRIVACY
          </div>

          <div className={styles.Terms}>
            TERMS
          </div>
        </div>
      </LinkComponent>
    </div>
  );
};

export default TempaltePrivacy;
