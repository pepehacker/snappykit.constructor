import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Image, ImageCard } from 'components/Form';

// Template
import { TEMPLATES } from 'template';

const TemplatesForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Image name="templateId">
      {TEMPLATES.map(({ id, preview }) => (
        <ImageCard
          key={id}
          label={[6, 7].indexOf(id) > -1 ? 'LONG' : 'SHORT'}
          src={preview}
          value={id}
        />
      ))}
    </Image>
  </Form>
);

export default reduxForm({
  form: 'templatesForm',
  destroyOnUnmount: false
  // enableReinitialize: true,
})(TemplatesForm);
