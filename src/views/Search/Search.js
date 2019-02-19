/* eslint-disable */
import classNames from 'classnames';
import { get, throttle } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

// Components
import Item from './components/Item';

// Containers
import Form from './containers/Form';

// Ducks
import { search } from './ducks/actions';
import { getSearchView } from './ducks/selector';

// Entities
import { fetchCountries } from 'entities/countries';

// Styles
import styles from './Search.scss';

const Search = ({
  // Props
  query,
  result,

  // Handlers
  handleChange,

  // State
  appsIsFetching,
  isMounted,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsFetching]: appsIsFetching,
  });

  return (
    <CSSTransition
      classNames={{
        enter: styles.RootAnimateEnter,
        enterActive: styles.RootAnimateEnterActive,
      }}
      in={isMounted}
      timeout={400}
      unmountOnExit
    >
      <div className={rootClassNames}>
        <div className={styles.Wrapper}>
          <div className={styles.Title}>
            App search
          </div>

          <div className={styles.Description}>
            We have created unique mobile app search function. <br />
            Just check it out.
          </div>

          <div className={styles.Form}>
            <Form onChange={handleChange} />
          </div>

          <CSSTransition
            classNames={{
              enter: styles.ResultAnimateEnter,
              enterActive: styles.ResultAnimateEnterActive,
              exit: styles.ResultAnimateExit,
              exitActive: styles.ResultAnimateExitActive,
            }}
            in={!!query}
            timeout={400}
            unmountOnExit
          >
            <div className={styles.Result}>
              <div className={styles.Loader}>
                <div className={styles.Spinner} />

                <div className={styles.LoaderTitle}>
                  Search app...
                </div>
              </div>

              {result && result.length > 0 && (
                <div className={styles.List}>
                  {result.map((item: Object): func => (
                    <Item {...item} key={item.id} />
                  ))}
                </div>
              )}
            </div>
          </CSSTransition>
        </div>
      </div>
    </CSSTransition>
  );
}

const mapStateToProps = (state: Object): Object =>
  getSearchView(state);

export default compose(
  connect(mapStateToProps, { fetchCountries, search }),
  withState('isMounted', 'setMounted', false),
  withState('query', 'setQuery', false),
  withHandlers(({ search, setQuery }): Object => {
    const changeThrottle = throttle((values: Object): void => {
      setQuery(get(values, 'name'));
      search(values);
    }, 2000);

    return {
      handleChange: ():func => changeThrottle,
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchCountries();
      this.props.setMounted(true);
    },
  }),
)(Search);
