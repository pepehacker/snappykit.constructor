import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import { Container, Title } from 'views/Editor';
import Form from './components/Form';

// Entities
import { updateTemplate } from 'entities/template/actions';
import { STORE } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Store.scss';

const Store = ({
  handleChange,
  initialValues,
}) => (
  <div className={styles.Root}>
    <Title title="Store" />

    <Container>
      <Form
        initialValues={initialValues}
        onChange={handleChange}
      />
    </Container>
  </div>
);

const mapStateToProps = (state: Object) => ({
  initialValues: getFieldById(state, STORE),
});

export default compose(
  connect(mapStateToProps, { updateTemplate }),
  withHandlers({
    handleChange: ({ updateTemplate }): func => (value: Object): void =>
      updateTemplate(STORE, value),
  }),
)(Store);
