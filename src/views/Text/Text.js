import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import { Container, Title } from 'views/Editor';

// Containers
import Form from './containers/Form';

// Entities
import { updateTemplate } from 'entities/template/actions';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Text.scss';

const Text = ({
  id,
  initialValues,
  handleChange,
  withText,
}) => (
  <div className={styles.Root}>
    <Title title="Text" />

    <Container>
      <Form
        form={id}
        initialValues={initialValues}
        key={id}
        onChange={handleChange}
        withText={withText}
      />
    </Container>
  </div>
);

const mapStateToProps = (state: Object, { match }) => {
  const id = get(match, 'params.fieldId');
  const initialValues = getFieldById(state, id);

  return {
    id, initialValues,
    withText: id && get(initialValues, 'text') !== undefined,
  };
};

export default compose(
  connect(mapStateToProps, { updateTemplate }),
  withHandlers({
    handleChange: ({ id, updateTemplate }): func => (value: Object): void =>
      updateTemplate(id, value),
  }),
)(Text);
