import React from 'react';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Palette, Select, Textarea } from 'components/Form';
import Style from './Style';

// Entities
import {
  TEXT_FONT, TEXT_FONT_VALUES,
  TEXT_STYLE,
} from 'entities/template/constants';

const TextForm = ({
  handleSubmit,
  withText,
}) => (
  <Form onSubmit={handleSubmit}>
    {withText && (
      <Textarea label="Text" name="text" placeholder="Set Text" />
    )}

    <Select label="Font" name="font" placeholder="Choose a font">
      {TEXT_FONT_VALUES.map((value: string) => (
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

export default compose(
  reduxForm({
    form: 'textForm',
    initialValues: {
      font: TEXT_FONT.ROBOTO,
      style: TEXT_STYLE.LIGHT,
    },
  })
)(TextForm);
