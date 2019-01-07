import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Link } from 'components/Form';

// Entities
import {
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_TWITTER,
  SOCIAL_VK,
} from 'entities/template/constants';

const SocialForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Link
      icon="fa-facebook"
      isPro
      label="Facebook"
      name={`items.${SOCIAL_FACEBOOK}`}
    />

    <Link
      icon="fa-twitter"
      isPro
      label="Twitter"
      name={`items.${SOCIAL_TWITTER}`}
    />

    <Link
      icon="fa-instagram"
      label="Instagram"
      name={`items.${SOCIAL_INSTAGRAM}`}
    />

    <Link
      icon="fa-vk"
      label="Vkontakte"
      name={`items.${SOCIAL_VK}`}
    />

    <Color label="Color" name="color" />
  </Form>
);

export default reduxForm({
  form: 'socialForm',
})(SocialForm);
