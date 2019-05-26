import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Link } from 'components/Form';

// Template
import { SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM, SOCIAL_TWITTER, SOCIAL_VK } from 'template';

// Styles
import styles from './Form.scss';

const SocialForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Group}>
      <Link
        icon="fa-facebook"
        label="Facebook"
        name={`items.${SOCIAL_FACEBOOK}`}
        prefix="https://www.facebook.com/"
      />

      <Link
        icon="fa-twitter"
        label="Twitter"
        name={`items.${SOCIAL_TWITTER}`}
        prefix="https://twitter.com/"
      />

      <Link
        icon="fa-instagram"
        label="Instagram"
        name={`items.${SOCIAL_INSTAGRAM}`}
        prefix="https://www.instagram.com/"
      />

      <Link
        icon="fa-vk" label="Vkontakte"
        name={`items.${SOCIAL_VK}`} prefix="https://vk.com/"
      />
    </div>

    <Color label="Color" name="color" />
  </Form>
);

export default reduxForm({
  form: 'socialForm',
})(SocialForm);
