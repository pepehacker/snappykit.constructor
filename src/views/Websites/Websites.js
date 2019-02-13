import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { compose, lifecycle, withState } from 'recompose';

// Components
import Item from './components/Item';

// Containers
import Limit from './containers/Limit';

// Entities
import { getWebsiteList } from 'entities/websites';

// Styles
import styles from './Websites.scss';

const Websites = ({
  items,

  // State
  isMounted,
}) => (
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
                  timeout={400 + 100 * item.length}
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
);

const mapStateToProps = (state: Object): Object => ({
  items: getWebsiteList(state),
});

export default compose(
  connect(mapStateToProps),
  withState('isMounted', 'setMounted', false),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true);
    },
  }),
)(Websites);
