import { get } from 'lodash';
import React from 'react';

// Components
import {
  Text,
} from 'components/Template';

// Ducks
import {
  DESCRIPTION,
  TITLE,
} from '../ducks';

// Styles
import schema from '../schema';
import styles from './Mobile.scss';

const Template1Mobile = () => (
  <div className={styles.Root}>
    <header className={styles.Header}>
      Header
    </header>

    <div className={styles.Container}>
      <Text {...get(schema, TITLE)} className={styles.Title}>
        123
      </Text>

      <Text {...get(schema, DESCRIPTION)} className={styles.Description}>
        123
      </Text>
    </div>

    <footer className={styles.Footer}>
      Footer
    </footer>
  </div>
);

export default Template1Mobile;
