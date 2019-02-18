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

// Styles
import styles from './Form.scss';

const SocialForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Group}>
      <Link
        icon="fa-facebook"
        label="Facebook"
        name={`items.${SOCIAL_FACEBOOK}`}
      />

      <Link
        icon="fa-twitter"
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
    </div>

    <Color label="Color" name="color" />
  </Form>
);

export default reduxForm({
  form: 'socialForm',
})(SocialForm);
