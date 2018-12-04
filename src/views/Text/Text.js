import React from 'react';

// Components
import { Container, Title } from 'views/Editor';
import Form from './components/Form';

import styles from './Text.scss';

const Text = () => (
  <div className={styles.Root}>
    <Title title="Text" />

    <Container>
      <Form onSubmit={console.log} />
    </Container>
  </div>
);

export default Text;
