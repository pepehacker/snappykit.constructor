import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form from 'components/Form';
import Icon from '../components/File';

const IconForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Icon name="src" />
  </Form>
);

export default reduxForm({
  form: 'iconForm',
})(IconForm);
