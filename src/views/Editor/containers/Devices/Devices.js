import React from 'react';

// Components
import Item from './components/Item';

// Template
import { VIEW } from 'template';

import styles from './Devices.scss';

const EditorDevices = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
      <Item id={VIEW.DESKTOP} title="DESKTOP" />
      <Item id={VIEW.TABLET} title="TABLET" />
      <Item id={VIEW.MOBILE} title="MOBILE" />
    </div>
  </div>
);

export default EditorDevices;
