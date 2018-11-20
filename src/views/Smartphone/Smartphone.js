import React from 'react';

// Components
import { Title } from 'views/Editor';
import Form from './components/Form';

import styles from './Smartphone.scss';

const Smarthpone = () => (
  <div className={styles.Root}>
    <Title title="Smartphone" />

    <div>
      <Form onSubmit={console.log} />
    </div>
  </div>
);

export default Smarthpone;
