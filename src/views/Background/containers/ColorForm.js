// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color } from 'components/Form';

// Template
import { BACKGROUND_COLOR } from 'template';

const BackgroundColorForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Color name={BACKGROUND_COLOR} />
  </Form>
);

export default reduxForm({
  form: 'backgroundColorForm',
})(BackgroundColorForm);
