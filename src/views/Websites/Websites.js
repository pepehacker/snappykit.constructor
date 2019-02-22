import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link, Redirect } from 'react-router-dom';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

// Components
import Item from './components/Item';

// Containers
import Confirm from './containers/Confirm';
import Limit, { Modal as LimitModal } from './containers/Limit';

// Ducks
import { LIMIT_MODAL_ID } from './ducks';

// Entities
import { getWebsiteList } from 'entities/websites';

// Services
import { openModal } from 'services/modals';
import { getSubscriptionLimit } from 'services/session';

// Styles
import styles from './Websites.scss';

const Websites = ({
  items,

  // Handlers
  handleCreate,

  // State
  isMounted,
}) => (
  <Fragment>
    {(!items || items.length === 0) ? (
      <Redirect to="/search" />
    ) : (
      <CSSTransition
        classNames={{
          enter: styles.RootAnimateEnter,
          enterActive: styles.RootAnimateEnterActive,
        }}
        in={isMounted}
        timeout={600}
        unmountOnExit
      >
        {(state: string) => (
          <div className={styles.Root}>
            <Confirm />
            <LimitModal />

            <div className={styles.Wrapper}>
              <div className={styles.Header}>
                <div className={styles.Title}>
                  Your Websites
                </div>

                <div className={styles.Limit}>
                  <Limit />
                </div>

                <div className={styles.Actions}>
                  <Link
                    className={styles.Create}
                    onClick={handleCreate}
                    to="/search"
                  />
                </div>
              </div>

              {items && items.length > 0 && (
                <div className={styles.List}>
                  {items.map((item: Object, index: number): func => (
                    <CSSTransition
                      classNames={{
                        enter: styles.ItemAnimateEnter,
                        enterActive: styles.ItemAnimateEnterActive,
                      }}
                      in={state === 'entered'}
                      key={index}
                      timeout={{ enter: 400 + 100 * item.length, exit: 400 }}
                      unmountOnExit
                    >
                      <div
                        className={styles.Item}
                        style={{ transitionDelay: `${0.1 * index}s` }}
                      >
                        <Item {...item} />
                      </div>
                    </CSSTransition>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </CSSTransition>
    )}
  </Fragment>
);

const mapStateToProps = (state: Object): Object => ({
  items: getWebsiteList(state),
  limit: getSubscriptionLimit(state),
});

export default compose(
  connect(mapStateToProps, { openModal }),
  withState('isMounted', 'setMounted', false),
  withHandlers({
    handleCreate: ({ items, limit, openModal }): func =>
      (event: Object): void => {
        if (items.length >= limit) {
          event.preventDefault();
          openModal(LIMIT_MODAL_ID);
        }
      },
  }),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true);
    },
  }),
)(Websites);
