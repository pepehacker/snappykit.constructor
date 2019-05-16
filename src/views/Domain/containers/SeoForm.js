import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Input, Textarea } from 'components/Form';

// Styles
import styles from './SeoForm.scss';

// Utils
import validate, { max, required } from 'utils/validate';

const DomainSeoForm = ({ handleSubmit }): Function => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Group}>
      <Input
        label="Title" max={100}
        name="title"
      />

      <Textarea
        classNames={{
          textarea: styles.Textarea,
        }}
        label="Description"
        max={200}
        name="description"
      />

      <Textarea
        classNames={{
          textarea: styles.Textarea,
        }}
        label="Keywords"
        max={400}
        name="keywords"
      />
    </div>
  </Form>
);

export default reduxForm({
  form: 'seoForm',
  validate: validate({
    description: [max(200, 'Max 200 letters!')],
    keywords: [max(400, 'Max 400 letters!')],
    title: [required(), max(100, 'Max 100 letters!')],
  }),
})(DomainSeoForm);
