import React from 'react';

// Components
import Item from './components/Item';

// Types
import {
  DESKTOP_DEVICE_ID,
  MOBILE_DEVICE_ID,
  TABLET_DEVICE_ID,
} from 'views/Editor';

import styles from './Devices.scss';

const EditorDevices = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
      <Item id={DESKTOP_DEVICE_ID} title="DESKTOP" />
      <Item id={TABLET_DEVICE_ID} title="TABLET" />
      <Item id={MOBILE_DEVICE_ID} title="MOBILE" />
    </div>
  </div>
);

export default EditorDevices;
