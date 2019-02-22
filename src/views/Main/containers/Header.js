import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath, withRouter, Link } from 'react-router-dom';

// Components
import Steps from '../components/Steps';
import User from '../components/User';

// Entities
import { getWebsiteById } from 'entities/websites';

// Styles
import logo from '../assets/logo.svg';
import styles from './Header.scss';

const MainHeader = ({
  step,
  website,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootWithTitle]: !!website,
  });

  return (
    <div className={rootClassNames}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <div className={styles.Logo}>
            <Link className={styles.LogoLink} to="/">
              <img
                alt="SnappyKit"
                className={styles.LogoImage}
                src={logo}
              />
            </Link>
          </div>
        </div>

        <div className={styles.Center}>
          <div className={styles.Title}>
            {get(website, 'title')}
          </div>

          <Steps step={step} />
        </div>

        <div className={styles.Right}>
          <User />
        </div>
      </div>

      <div className={styles.Shadow} />
    </div>
  );
};

const mapStateToProps = (state: Object, { location }) => {
  const pathname = get(location, 'pathname');

  // Matches
  const editorMatch = matchPath(pathname, { path: '/new/editor' });
  const launchMatch = matchPath(pathname, { path: '/launch/:appId' });
  const searchMatch = matchPath(pathname, { path: '/search' });

  // Website
  const websiteMatch = matchPath(pathname, { path: '/:websiteId/editor'});
  const websiteId = get(websiteMatch, 'params.websiteId');

  return {
    step: launchMatch
      ? 3 : editorMatch
        ? 2 : searchMatch
          ? 1 : 0,
    website: getWebsiteById(state, websiteId),
  };
};

export default withRouter(connect(mapStateToProps)(MainHeader));
