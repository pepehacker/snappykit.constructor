import React from 'react';

// Components
import {
  Background,
  Icon,
  Policy,
  Screenshots,
  Smartphone,
  Social,
  Store,
  Text,
} from 'template';

// Entities
import {
  COPYRIGHT,
  DESCRIPTION,
  TITLE,
} from 'entities/template/constants';

// Styles
import styles from './Desktop.scss';

const Template1 = () => (
  <Background classNames={{
    root: styles.Root,
    // container: styles.Root,
  }}>
    <div className={styles.Wrapper}>
      <header className={styles.Header}>
        <Icon classNames={{ icon: styles.Icon}} />
        <Social />
      </header>

      <div className={styles.Body}>
        <div className={styles.Content}>
          <Text className={styles.Title} id={TITLE} />
          <Text className={styles.Description} id={DESCRIPTION} />
          <Store className={styles.Store} />
        </div>

        <div className={styles.Slider}>
          <Smartphone
            classNames={{
              root: styles.Smartphone,
              container: styles.Screenshots,
              mockup: styles.SmartphoneMockup,
            }}
          >
            <Screenshots classNames={{ item: styles.ScreenshotsItem }} />
          </Smartphone>
        </div>
      </div>

      <footer className={styles.Footer}>
        <Policy className={styles.Policy} />
        <Text className={styles.Copyright} id={COPYRIGHT} />
      </footer>
    </div>
  </Background>
);

export default Template1;
