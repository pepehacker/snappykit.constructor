import { get } from 'lodash';
import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Input, Palette, Select } from 'components/Form';
import Style from './Style';

// Entities
import { TEXT_FONT, TEXT_STYLE } from 'entities/template/constants';

const TextForm = ({
  handleSubmit,
  ...props,
}) => (
  <Form onSubmit={handleSubmit}>
    <Input label="Text" name="text" placeholder="Set Text" />

    <Select label="Font" name="font" placeholder="Choose a font">
      {get(TEXT_FONT, 'values', []).map((value: string) => (
        <option
          key={value}
          value={value}
        >
          {value}
        </option>
      ))}
    </Select>

    <Style label="Style" name="style" />
    <Color label="Color" name="color" />
    <Palette label="Palette" name="color" />
  </Form>
);

export default reduxForm({
  form: 'textForm',
  initialValues: {
    font: TEXT_FONT.ROBOTO,
    style: TEXT_STYLE.LIGHT,
  },
})(TextForm);
