import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Steps from '../components/Steps';
import User from '../components/User';

// Styles
import logo from '../assets/logo.svg';
import styles from './Header.scss';

const MainHeader = () => (
  <div className={styles.Root}>
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

        <div className={styles.Title}>
          Instagram App
        </div>
      </div>

      <div className={styles.Center}>
        <Steps />
      </div>

      <div className={styles.Right}>
        <User />
      </div>
    </div>

    <div className={styles.Shadow} />
  </div>
);

export default MainHeader;
