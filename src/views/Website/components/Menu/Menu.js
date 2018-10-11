import React from 'react';

// Components
import Item from './components/Item';

// Utils
import generateMenu from './utils/generateMenu';

import styles from './Menu.scss';

const WebsiteMenu = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
      {generateMenu(1).map(({ id, ...item }) => (
        <Item {...item} key={id} />
      ))}
    </div>
  </div>
);

export default WebsiteMenu;
