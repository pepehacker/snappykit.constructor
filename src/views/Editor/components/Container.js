import React from 'react';

import styles from './Container.scss';

const EditorContainer = ({
  children,
}) => (
  <div className={styles.Root}>
    {children}
  </div>
);

export default EditorContainer;
