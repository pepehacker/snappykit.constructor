import React from 'react';

// Components
import { Container, Title } from 'views/Editor';

// Containers
import Form from './containers/Form';

// Styles
import styles from './Background.scss';

const Background = () => (
  <div className={styles.Root}>
    <Title title="Background" />

    <Container>
      <Form />
    </Container>
  </div>
);

export default Background;
