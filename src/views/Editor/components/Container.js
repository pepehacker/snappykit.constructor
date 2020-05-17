import React from 'react';

// Styles
import styles from './Container.scss';

const EditorContainer = ({ children, isAvailable }) => (
  <div className={styles.Root}>{children}</div>
);

export default EditorContainer;
