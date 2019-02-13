import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { compose, lifecycle } from 'recompose';
import url from 'url';

// Containers
import Header from './containers/Header';

// Entities
import { fetchWebsites } from 'entities/websites';

// Views
import Search from 'views/Search';
import Website from 'views/Website';
import Websites from 'views/Websites';

// Styles
import styles from './Main.scss';

const Main = ({
  isFetching,
  location,
  match,
}) => (
  <div className={styles.Root}>
      <div className={styles.Wrapper}>
        <Header />

        <div className={styles.Container}>
          <TransitionGroup>
            <CSSTransition
              classNames={{
                enter: styles.ContainerAnimateEnter,
                enterDone: styles.ContainerAnimateEnterDone,
                exit: styles.ContainerAnimateExit,
                exitActive: styles.ContainerAnimateExitActive,
              }}
              key={location.key}
              timeout={{ enter: 400, exit: 400 }}
            >
              <Switch location={location}>
                <Route path={url.resolve(match.url, '/search')} component={Search} />
                <Route path={url.resolve(match.url, '/:websiteId')} component={Website} />
                <Route path={url.resolve(match.url, '/')} component={Websites} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
  </div>
);

const mapStateToProps = ({ views }) => ({
  isFetching: get(views, 'main.isFetching'),
});

export default compose(
  connect(mapStateToProps, { fetchWebsites }),
  lifecycle({
    componentDidMount() {
      this.props.fetchWebsites();
    },
  }),
)(Main);
