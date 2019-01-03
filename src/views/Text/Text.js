import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

// Components
import { Container, Title } from 'views/Editor';
import Form from './components/Form';

// Ducks
import { getFieldById } from 'entities/template';

// Template
import { schema } from 'template';

import styles from './Text.scss';

const Text = (props) => (
  <div className={styles.Root}>
    <Title title="Text" />

    <Container>
      <Form onSubmit={values => console.log() /* eslint-disable-line */} />
    </Container>
  </div>
);

const mapStateToProps = (state: Object, { match }) => {
  const id = get(match, 'params.fieldId');
  console.log(id);
  console.log(getFieldById(state, id));
  return {
    form: id,
    initialValues: getFieldById(state, id),
  };
};

export default connect(mapStateToProps)(Text);
