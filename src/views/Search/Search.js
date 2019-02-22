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
import { search, setQuery } from './ducks/actions';
import { getSearchView } from './ducks/selector';

// Entities
import { fetchCountries } from 'entities/countries';
import { createWebsite } from 'entities/websites';

// Styles
import styles from './Search.scss';

const Search = ({
  // Props
  query,
  result,

  // Handlers
  handleChange,
  handleCreate,

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
                    <Item {...item} key={item.id} onClick={handleCreate} />
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
  connect(mapStateToProps, {
    createWebsite,
    fetchCountries,
    search,
    setQuery,
  }),
  withState('isMounted', 'setMounted', false),
  withHandlers(({ search }): Object => {
    const changeThrottle = throttle((values: Object): void =>
      search(values), 2000);

    return {
      handleChange: ({ setQuery }): func => (values: Object) => {
        setQuery(get(values, 'name'));
        return changeThrottle(values);
      },
      handleCreate: ({ createWebsite }): func =>
        (values: string): void =>
          createWebsite(values),
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchCountries();
      this.props.setMounted(true);
    },
    componentWillUnmount() {
      this.props.setQuery('');
    },
  }),
)(Search);
