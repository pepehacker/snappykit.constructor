import React from 'react';

// Components
import {
  Links,
  Logo,
  Screenshots,
  Smartphone,
  Social,
  Store,
  Text,
} from 'components/Template';

// Styles
import styles from './Desktop.scss';

const Template1 = ({

}) => (
  <div className={styles.Root}>
    <div className={styles.Wrapper}>
      <header className={styles.Header}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <div className={styles.Social}>
          <Social />
        </div>
      </header>

      <div className={styles.Container}>
        <div className={styles.Left}>
          <Text className={styles.Title}>
            Make cool audio, <br />
            right from your phone.
          </Text>

          <Text className={styles.Description}>
            Anchor lets you record or capture ANY audio, right from your phone. <br />
            It’s the easiest way to make a podcast or radio show, ever. <br />
            No experience necessary (and it’s 100% free). <br />
          </Text>

          <div className={styles.Store}>
            <Store />
          </div>
        </div>

        <div className={styles.Right}>
          <Smartphone>
            <Screenshots />
          </Smartphone>
        </div>
      </div>

      <footer className={styles.Footer}>
        <div className={styles.Links}>
          <Links />
        </div>

        <div className={styles.Copyright}>
          <Text className={styles.CopyrightText}>
            © 2018 ANCHOR FM INC
          </Text>
        </div>
      </footer>
    </div>
  </div>
);

export default Template1;
