import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Image, ImageCard } from 'components/Form';

// Template
import { TEMPLATES } from 'template';

const TemplatesForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Image name="templateId">
      {TEMPLATES.map(({ id, preview }): func => (
        <ImageCard key={id} src={preview} value={id} />
      ))}
    </Image>
  </Form>
);

export default reduxForm({
  form: 'templatesForm',
})(TemplatesForm);
