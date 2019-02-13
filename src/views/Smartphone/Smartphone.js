import React from 'react';

// Components
import { Container, Title } from 'views/Editor';

// Containers
import Form from './containers/Form';

// Styles
import styles from './Smartphone.scss';

const Smarthpone = ({
  initialValues,
  handleChange,
}) => (
  <div className={styles.Root}>
    <Title title="Smartphone" />

    <Container>
      <Form onChange={handleChange} />
    </Container>
  </div>
);

export default Smarthpone;
