// @todo - рефаткор
import classNames from 'classnames';
import { get } from 'lodash';
import moment from 'moment';
import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose, withHandlers, withState } from 'recompose';

// Containers
import { PLANS_MODAL_ID } from 'containers/Plans';

// Services
import { openModal } from 'services/modals';
import { isEnded } from 'services/session';

// Styles
import styles from './User.scss';

const LINKS = [
  { icon: 'Website', title: 'Your Websites', to: '/' },
  { icon: 'Plans', title: 'Plans', to: '/plans' },
  { icon: 'Password', title: 'Change Password', to: '/password' },
];

const MainHeaderUser = ({
  rootRef,
  user,
  // Handlers
  handleClick,
  handleDropdownBlur,
  handleTriggerPlans,
  // State
  isEnded,
  isOpened,
}) => {
  const className: string = classNames(styles.Root, {
    [styles.RootOpened]: isOpened,
  });

  const expireDate: string = get(user, 'subscription.expireDate');
  const daysLeft: number = Math.max(
    0,
    moment(expireDate).diff(moment(), 'days'),
  );
  const period: number = get(user, 'subscription.period', 30);

  return (
    <div
      ref={rootRef}
      className={className}
      onBlur={handleDropdownBlur}
      tabIndex={0}
    >
      <div className={styles.Trigger}>
        <button
          className={styles.TriggerButton}
          onClick={handleClick}
          type="button"
        >
          {get(user, 'email')}
        </button>
      </div>

      <div className={styles.Dropdown}>
        <div className={styles.DropdownWrapper}>
          <div className={styles.Status}>
            {get(user, 'subscription.name')}
          </div>

          {!isEnded && (
            <div className={styles.Expiration}>
              <div className={styles.ExpirationTitle}>
                {daysLeft}
                {' days left'}
              </div>

              <div className={styles.ExpirationProgress}>
                <div
                  className={styles.ExpirationProgressBar}
                  style={{ width: `${100 - (daysLeft * 100) / period}%` }}
                />
              </div>
            </div>
          )}

          <div className={styles.Links}>
            {LINKS.map(({ icon, onClick, title, to }, index) => {
              const iconClassName = classNames(
                styles.LinkIcon,
                styles[`LinkIcon${icon}`],
              );

              return (
                <NavLink
                  key={index}
                  activeClassName={styles.LinkIsActive}
                  className={styles.Link}
                  exact
                  onClick={title === 'Plans' ? handleTriggerPlans : null}
                  to={to}
                >
                  <span className={iconClassName} />

                  <div className={styles.LinkTitle}>
                    {title}
                  </div>
                </NavLink>
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

const mapStateToProps = state => ({
  isEnded: isEnded(state),
  user: get(state, 'services.session.user', {}),
});

export default compose(
  connect(
    mapStateToProps,
    { openModal },
  ),
  withState('isOpened', 'setOpen', false),
  withState('rootRef', 'setRootRef', createRef()),
  withHandlers({
    handleClick: ({ isOpened, setOpen }) => () => setOpen(!isOpened),
    handleDropdownBlur: ({ rootRef, setOpen }) => event =>
      !rootRef.current.contains(event.relatedTarget) && setOpen(false),
    handleTriggerPlans: ({ openModal }): Function => (event: Object): void => {
      event.preventDefault();
      openModal(PLANS_MODAL_ID);
    },
  }),
)(MainHeaderUser);
