import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Steps from './components/Steps';
import User from './components/User';

import logo from '../../assets/logo.svg';
import styles from './Header.scss';

const MainHeader = () => (
  <div className={styles.Root}>
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Link className={styles.LogoLink} to="/">
          <img
            alt="SnappyKit"
            className={styles.LogoImage}
            src={logo}
          />
        </Link>
      </div>

      <div className={styles.Title}>
        Instagram App
      </div>

      <div className={styles.Steps}>
        <Steps />
      </div>

      <div className={styles.User}>
        <User />
      </div>
    </div>

    <div className={styles.Shadow} />
  </div>
);

export default MainHeader;
