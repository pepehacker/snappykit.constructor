import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, {
  Color, Palette,
  COLOR_DEFAULT,
} from 'components/Form';
import Social from './Field';

const SocialForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Social label="Facebook" name="facebook" isPro />
    <Social label="Twitter" name="twitter" isPro />
    <Social label="Instagram" name="instagram" />
    <Social label="Vkontakte" name="vk" />

    <Color label="Color" name="color" />
    <Palette label="Palette" name="color" />
  </Form>
);

export default reduxForm({
  form: 'socialForm',
  initialValues: {
    color: COLOR_DEFAULT,
  },
})(SocialForm);
