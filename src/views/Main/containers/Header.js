import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath, withRouter, Link } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import Spinner from 'components/Spinner';

import Steps from '../components/Steps';
import User from '../components/User';

// Entities
import { getWebsiteById, saveWebsite } from 'entities/websites';

// Styles
import logo from '../assets/logo.svg';
import styles from './Header.scss';

const MainHeader = ({
  step,
  website,

  // Handlers
  handleSave,

  // State
  isFetching,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootIsFetching]: isFetching,
    [styles.RootWithActions]: !!website,
    [styles.RootWithSteps]: !!step,
    [styles.RootWithTitle]: !!website,
  });

  return (
    <div className={rootClassNames}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <div className={styles.Logo}>
            <Link className={styles.LogoLink} to="/">
              <img
                alt="SnappyKit" className={styles.LogoImage}
                src={logo}
              />
            </Link>

            <div className={styles.Pro}>PRO</div>
          </div>
        </div>

        <div className={styles.Center}>
          <div className={styles.Title}>
            {get(website, 'title')}
          </div>

          <div className={styles.Steps}>
            <Steps step={step} />
          </div>

          <div className={styles.Actions}>
            <Link className={styles.Back} to={step === 2 ? '/search' : '/'}>
              BACK
            </Link>

            <button
              className={styles.Save} onClick={handleSave}
              type="button"
            >
              {isFetching && <Spinner />}
              {step === 2 ? 'NEXT' : 'SAVE'}
            </button>
          </div>
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
  const domainMatch = matchPath(pathname, { path: '/new/domain' });
  const editorMatch = matchPath(pathname, { path: '/new/editor' });
  const launchMatch = matchPath(pathname, { path: '/launch/:appId' });
  const searchMatch = matchPath(pathname, { path: '/search' });

  // Website
  const websiteDomainMatch = matchPath(pathname, { path: '/:websiteId/domain' });
  const websiteEditorMatch = matchPath(pathname, { path: '/:websiteId/editor' });
  const websiteId = get(websiteDomainMatch || websiteEditorMatch, 'params.websiteId');
  const website = getWebsiteById(state, websiteId);

  return {
    website,
    websiteId,
    isFetching: get(website, 'isFetching'),
    step: launchMatch ? 3 : editorMatch || domainMatch ? 2 : searchMatch ? 1 : 0,
  };
};

export default withRouter(
  compose(
    connect(
      mapStateToProps,
      { saveWebsite },
    ),
    withHandlers({
      handleSave: ({ saveWebsite, websiteId }): func => (event: Object) => saveWebsite(websiteId),
    }),
  )(MainHeader),
);
