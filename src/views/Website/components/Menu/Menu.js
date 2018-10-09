import React from 'react';

// Components
import Item from './components/Item';

// Utils
import generateMenu from './utils/generateMenu';

import styles from './Menu.scss';

const WebsiteMenu = () => (
  <div className={styles.Root}>
    {generateMenu(1).map(({ id, ...item }) => (
      <Item {...item} key={id} />
    ))}
  </div>
);

export default WebsiteMenu;
