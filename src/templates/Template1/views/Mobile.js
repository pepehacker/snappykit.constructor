import { get } from 'lodash';
import React from 'react';

// Components
import {
  Social,
  Store,
  Text,
} from 'components/Template';

// Entities
import { DESCRIPTION, TITLE } from 'entities/template/constants';

// Styles
import styles from './Mobile.scss';

const Template1Mobile = () => (
  <div className={styles.Root}>
    <div className={styles.Container}>
      <Text className={styles.Title} id={TITLE} />
      <Text className={styles.Description} id={DESCRIPTION} />
      <Store className={styles.Store} />
    </div>

    <footer className={styles.Footer}>
      <Social className={styles.Social} />
    </footer>
  </div>
);

export default Template1Mobile;

// // Components
// import {
//   Icon,
//   Privacy,
//   Screenshots,
//   Smartphone,
//   Social,
//   Store,
//   Text,
// } from 'components/Template';

// // Ducks
// import {
//   DESCRIPTION,
//   SMARTPHONE,
//   TITLE,
// } from '../ducks/constants';

// // Styles
// import config from '../config';
// import styles from './Mobile.scss';

// const Template1Mobile = () => (
//   <div className={styles.Root}>
//     <header className={styles.Header}>
//       <Icon className={styles.Icon} />
//       <Privacy className={styles.Privacy} />
//     </header>

//     <div className={styles.Container}>
//       <div className={styles.Slider}>
//         <Smartphone {...get(config, `fields.${SMARTPHONE}`)} className={styles.Smartphone} />
//         <Screenshots
//           classNames={{
//             root: styles.Screenshots,
//             item: styles.ScreenshotsItem,
//             slider: styles.ScreenshotsSlider,
//           }}
//         />
//       </div>

//       <Text {...get(config, `fields.${TITLE}`)} className={styles.Title}>
//         123
//       </Text>

//       <Text {...get(config, `fields.${DESCRIPTION}`)} className={styles.Description}>
//         123
//       </Text>

//       <Store className={styles.Store} />
//     </div>

//     <footer className={styles.Footer}>
//       <Social className={styles.Social} />
//     </footer>
//   </div>
// );

