import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Input, Textarea } from 'components/Form';

// Styles
import styles from './SeoForm.scss';

const DomainSeoForm = ({
  handleSubmit,
}): Function => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Group}>
      <Input label="Title" name="title" />
      <Textarea
        classNames={{
          textarea: styles.Textarea,
        }}
        label="Description"
        name="description"
      />

      <Textarea
        classNames={{
          textarea: styles.Textarea,
        }}
        label="Keywords"
        name="keywords"
      />
    </div>
  </Form>
);

export default reduxForm({
  form: 'seoForm',
})(DomainSeoForm);
