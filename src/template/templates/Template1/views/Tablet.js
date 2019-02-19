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
  VIEW,
} from 'entities/template/constants';

// Styles
import styles from './Tablet.scss';

const Template1Tablet = ({ style }) => (
  <Background
    classNames={{
      root: styles.Root,
      container: styles.Container
    }}
  >
    <header className={styles.Header}>
      <Icon classNames={{ icon: styles.Icon}} />
      <Social />
    </header>

    <div className={styles.Wrapper}>
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

      <div className={styles.Content}>
        <Text className={styles.Title} id={TITLE} />
        <Text className={styles.Description} id={DESCRIPTION} />
        <Store className={styles.Store} view={VIEW.TABLET} />
      </div>
    </div>

    <footer className={styles.Footer}>
      <Policy
        classNames={{
          root: styles.Policy,
          container: styles.PolicyContainer,
        }}
      />
      <Text className={styles.Copyright} id={COPYRIGHT} />
    </footer>
  </Background>
);

export default Template1Tablet;
