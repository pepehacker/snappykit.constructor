import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Link } from 'components/Form';

// Services
import { isPro } from 'services/session';

// Styles
import styles from './Form.scss';

// Template
import {
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_TWITTER,
  SOCIAL_VK
} from 'template';

const SocialForm = ({ handleSubmit, isPro }) => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Group}>
      <Link
        icon="fa-facebook"
        isPro={!isPro}
        label="Facebook"
        name={`items.${SOCIAL_FACEBOOK}`}
        prefix="https://www.facebook.com/"
      />

      <Link
        icon="fa-twitter"
        isPro={!isPro}
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
        icon="fa-vk"
        label="Vkontakte"
        name={`items.${SOCIAL_VK}`}
        prefix="https://vk.com/"
      />
    </div>

    <Color label="Color" name="color" />
  </Form>
);

const mapStateToProps: Function = (state: Object): Object => ({
  isPro: isPro(state)
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'socialForm'
  })
)(SocialForm);
