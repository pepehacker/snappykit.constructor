import classNames from 'classnames';
import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import { compose, withHandlers, withState } from 'recompose';

import styles from './User.scss';

const LINKS = [
  { icon: 'Website', title: 'Your Website', to: '/' },
  { icon: 'Plans', title: 'Plans', to: '/' },
  { icon: 'Password', title: 'Change Password', to: '/' },
];

const MainHeaderUser = ({
  handleClick,
  handleDropdownBlur,
  isOpened,
  rootRef,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootOpened]: isOpened,
  });

  return (
    <div
      className={className}
      onBlur={handleDropdownBlur}
      ref={rootRef}
      tabIndex={0}
    >
      <div className={styles.Trigger}>
        <button
          className={styles.TriggerButton}
          onClick={handleClick}
          type="button"
        >
          vanya095@gmail.com
        </button>
      </div>

      <div
        className={styles.Dropdown}
      >
        <div className={styles.DropdownWrapper}>
          <div className={styles.Status}>
            PRO
          </div>

          <div className={styles.Expiration}>
            <div className={styles.ExpirationTitle}>
              4 days left
            </div>

            <div className={styles.ExpirationProgress}>
              <div className={styles.ExpirationProgressBar} />
            </div>
          </div>

          <div className={styles.Links}>
            {LINKS.map(({ icon, title, to }, index) => {
              const iconClassName = classNames(styles.LinkIcon, styles[`LinkIcon${icon}`]);

              return (
                <Link className={styles.Link} key={index} to={to}>
                  <span className={iconClassName} />

                  <div className={styles.LinkTitle}>
                    {title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.Logout}>
          <button className={styles.LogoutButton} type="button">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default compose(
  withState('isOpened', 'setOpen', false),
  withState('rootRef', 'setRootRef', createRef()),
  withHandlers({
    handleClick: ({ isOpened, setOpen }) => () => setOpen(!isOpened),
    handleDropdownBlur: ({ rootRef, setOpen }) => event => !rootRef.current.contains(event.relatedTarget) && setOpen(false),
  }),
)(MainHeaderUser);
