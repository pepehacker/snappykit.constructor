import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Select, SelectItem } from 'components/Form';
import Mockup from '../components/Mockup';

// Ducks
import { SMARTPHONE_FORM_ID } from '../ducks/constants';

// Template
import { SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'template';

const SMARTPHONE_MODEL_LIST = [
  {
    label: 'iPhone 11',
    value: SMARTPHONE_MODEL.IPHONE_11
  },
  {
    label: 'iPhone 11 Pro',
    value: SMARTPHONE_MODEL.IPHONE_11_PRO
  },
  // {
  //   label: 'iPhone SE',
  //   value: SMARTPHONE_MODEL.IPHONE_SE
  // },
  {
    label: 'Galaxy S20',
    value: SMARTPHONE_MODEL.GALAXY_S20
  },
  {
    label: 'Pixel 4',
    value: SMARTPHONE_MODEL.PIXEL_4
  }
];

const SMARTPHONE_STYLE_LIST = [
  {
    label: 'Flat',
    value: SMARTPHONE_STYLE.FLAT
  },
  {
    label: 'Glass',
    value: SMARTPHONE_STYLE.GLASS
  }
  // {
  //   label: 'Line',
  //   value: SMARTPHONE_STYLE.LINE
  // }
];

const SmartphoneForm = ({ handleSubmit, form, model, style }) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Model" name="model" placeholder="Choose a model">
      {SMARTPHONE_MODEL_LIST.map(({ label, value }): func => (
        <SelectItem key={value} label={label} value={value} />
      ))}
    </Select>

    <Select label="Style" name="style" placeholder="Choose a style">
      {SMARTPHONE_STYLE_LIST.map(({ label, value }): func => (
        <SelectItem key={value} label={label} value={value} />
      ))}
    </Select>

    <Mockup form={form} name="mockup" />
  </Form>
);

export default reduxForm({
  form: SMARTPHONE_FORM_ID
})(SmartphoneForm);
