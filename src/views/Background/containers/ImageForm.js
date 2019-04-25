// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form from 'components/Form';
import Image from '../components/Image';

// Template
import { BACKGROUND_IMAGE } from 'template';

const BackgroundImageForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Image name={BACKGROUND_IMAGE} />
  </Form>
);

export default reduxForm({
  form: 'backgroundForm',
})(BackgroundImageForm);
