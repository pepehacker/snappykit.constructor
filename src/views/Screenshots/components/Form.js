import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form from 'components/Form';
import List from './List';

const ScreenshotsForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <List name="items" />
  </Form>
);

export default reduxForm({
  form: 'screenshotsFotm',
})(ScreenshotsForm);
