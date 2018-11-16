import React from 'react';

// Components
import { Title } from 'views/Editor';
import Form from './components/Form';

import styles from './Text.scss';

const Text = () => (
  <div className={styles.Root}>
    <Title title="Text" />

    <div className={styles.Container}>
      <Form onSubmit={console.log} />
    </div>
  </div>
);

export default Text;
