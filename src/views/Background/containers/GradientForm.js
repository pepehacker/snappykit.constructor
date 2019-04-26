// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Gradient } from 'components/Form';

// Template
import { BACKGROUND_GRADIENT } from 'template';

const BackgroundGradientForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Gradient name={BACKGROUND_GRADIENT} />
  </Form>
);

export default reduxForm({
  form: 'backgroundGradientForm',
})(BackgroundGradientForm);
