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
  DESCRIPTION,
  TITLE,
} from 'entities/template/constants';

// Styles
import styles from './Mobile.scss';

const Template1Mobile = () => (
  <Background
    classNames={{
      root: styles.Root,
      container: styles.Container
    }}
  >
    <header className={styles.Header}>
      <Icon classNames={{ icon: styles.Icon}} />
      <Policy className={styles.Policy} />
    </header>

    <div className={styles.Wrapper}>
      <div className={styles.Slider}>
        <Smartphone
          classNames={{
            root: styles.Smartphone,
            container: styles.Screenshots,
          }}
        >
          <Screenshots classNames={{ item: styles.ScreenshotsItem }} />
        </Smartphone>
      </div>

      <Text className={styles.Title} id={TITLE} />
      <Text className={styles.Description} id={DESCRIPTION} />
      <Store className={styles.Store} />
    </div>

    <footer className={styles.Footer}>
      <Social className={styles.Social} />
    </footer>
  </Background>
);

export default Template1Mobile;
