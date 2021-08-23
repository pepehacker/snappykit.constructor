import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Select, SelectItem } from 'components/Form';
import {
  SMARTPHONE_COLOR,
  SMARTPHONE_MODEL,
  SMARTPHONE_STYLE
} from 'components/Smartphone';

import Palette from '../components/Palette';

// Ducks
import { SMARTPHONE_FORM_ID } from '../ducks/constants';

const SMARTPHONE_MODEL_LIST = [
  { label: 'IPhone 12', value: SMARTPHONE_MODEL.IPHONE_12 },
  { label: 'IPhone 12 Pro', value: SMARTPHONE_MODEL.IPHONE_12_PRO },
  { label: 'Galaxy S20', value: SMARTPHONE_MODEL.GALAXY_S20 },
  { label: 'Pixel 4', value: SMARTPHONE_MODEL.PIXEL_4 }
];

const SMARTPHONE_STYLE_LIST = [{ label: 'Flat', value: SMARTPHONE_STYLE.FLAT }];

const SmartphoneForm = ({ handleSubmit, initialValues: { model, style } }) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Model" name="model" placeholder="Choose a model">
      {SMARTPHONE_MODEL_LIST.map(({ label, value }) => (
        <SelectItem key={value} label={label} value={value} />
      ))}
    </Select>

    <Select label="Style" name="style" placeholder="Choose a style">
      {SMARTPHONE_STYLE_LIST.map(({ label, value }) => (
        <SelectItem key={value} label={label} value={value} />
      ))}
    </Select>

    <Palette colors={SMARTPHONE_COLOR[model][style]} name="color" />

    <Color name="color" />
  </Form>
);

export default reduxForm({
  form: SMARTPHONE_FORM_ID
})(SmartphoneForm);
