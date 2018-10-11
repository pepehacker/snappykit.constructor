import React from 'react';

// Components
import Devices from './components/Devices';
import View from './components/View';

import styles from './Editor.scss';

const Editor = () => (
  <div className={styles.Root}>
    <div className={styles.Container}>
      <div className={styles.View}>
        <View />
      </div>

      <div className={styles.Devices}>
        <Devices />
      </div>
    </div>

    <div className={styles.Sidebar}>
      Sidebar
    </div>
  </div>
);

export default Editor;
