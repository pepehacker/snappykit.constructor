import { get } from 'lodash';
import React from 'react';

// Components
import {
  Privacy,
  Screenshots,
  Smartphone,
  Social,
  Store,
  Text,
} from 'components/Template';

// Ducks
import {
  DESCRIPTION,
  SMARTPHONE,
  TITLE,
} from '../ducks/constants';

// Styles
import config from '../config';
import styles from './Mobile.scss';

const Template1Mobile = () => (
  <div className={styles.Root}>
    <header className={styles.Header}>
      Header
      <Privacy className={styles.Privacy} />
    </header>

    <div className={styles.Container}>
      <div className={styles.Slider}>
        <Smartphone {...get(config, `fields.${SMARTPHONE}`)} className={styles.Smartphone} />
        <Screenshots
          classNames={{
            root: styles.Screenshots,
            item: styles.ScreenshotsItem,
            slider: styles.ScreenshotsSlider,
          }}
        />
      </div>

      <Text {...get(config, `fields.${TITLE}`)} className={styles.Title}>
        123
      </Text>

      <Text {...get(config, `fields.${DESCRIPTION}`)} className={styles.Description}>
        123
      </Text>

      <Store className={styles.Store} />
    </div>

    <footer className={styles.Footer}>
      <Social className={styles.Social} />
    </footer>
  </div>
);

export default Template1Mobile;
