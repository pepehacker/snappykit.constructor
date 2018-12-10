import React from 'react';

// Components
import { Container, Title } from 'views/Editor';
import Form from './components/Form';

import styles from './Smartphone.scss';

const Smarthpone = () => (
  <div className={styles.Root}>
    <Title title="Smartphone" />

    <Container>
      <Form onSubmit={values => console.log() /* eslint-disable-line */} />
    </Container>
  </div>
);

export default Smarthpone;
