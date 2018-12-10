import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form from 'components/Form';
import Icon from './Field';

const IconForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Icon name="icon" />
  </Form>
);

export default reduxForm({
  form: 'iconForm',
})(IconForm);
