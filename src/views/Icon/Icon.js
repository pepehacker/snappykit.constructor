import React from 'react';

// Components
import { Container, Title } from 'views/Editor';
import Form from './components/Form';

import styles from './Icon.scss';

const Icon = () => (
  <div className={styles.Root}>
    <Title title="Icon" />

    <Container>
      <Form onSubmit={values => console.log() /* eslint-disable-line */} />
    </Container>
  </div>
);

export default Icon;
