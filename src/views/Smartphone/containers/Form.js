import { get } from 'lodash';
import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Select, SelectItem } from 'components/Form';
import Mockup from '../components/Mockup';

// Ducks
import { SMARTPHONE_FORM_ID } from '../ducks/constants';

// Template
import { SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'template';

const SmartphoneForm = ({ handleSubmit, model, style }) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Model" name="model" placeholder="Choose a model">
      {get(SMARTPHONE_MODEL, 'values', []).map(
        ({ label, value: itemValue }): func => (
          <SelectItem key={itemValue} label={label} value={itemValue} />
        )
      )}
    </Select>

    <Select label="Style" name="style" placeholder="Choose a style">
      {get(SMARTPHONE_STYLE, 'values', []).map(
        ({ label, value: itemValue }): func => (
          <SelectItem key={itemValue} label={label} value={itemValue} />
        )
      )}
    </Select>

    <Mockup name="mockup" />
  </Form>
);

export default reduxForm({
  form: SMARTPHONE_FORM_ID
})(SmartphoneForm);
