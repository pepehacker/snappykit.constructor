import { get } from 'lodash';
import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Select, SelectItem } from 'components/Form';
import Mockup from '../components/Mockup';

// Template
import { SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'template';

const SmartphoneForm = ({ handleSubmit, model, style }) => (
  <Form onSubmit={handleSubmit}>
    <Select
      label="Model" name="model"
      placeholder="Choose a model"
    >
      {get(SMARTPHONE_MODEL, 'values', []).map(
        ({ label, value: itemValue }): func => (
          <SelectItem
            key={itemValue} label={label}
            value={itemValue}
          />
        ),
      )}
    </Select>

    <Select
      label="Style" name="style"
      placeholder="Choose a style"
    >
      {get(SMARTPHONE_STYLE, 'values', []).map(
        ({ label, value: itemValue }): func => (
          <SelectItem
            key={itemValue} label={label}
            value={itemValue}
          />
        ),
      )}
    </Select>

    <Mockup
      model={model} name="mockup"
      style={style}
    />
  </Form>
);

export default reduxForm({
  form: 'smartphoneForm',
})(SmartphoneForm);
