import React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Form, {
  Color, Palette, Select,
  COLOR_DEFAULT,
} from 'components/Form';
import Style from './Style';

const TextForm = ({
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Font" name="font" placeholder="Choose a font">
      <option value="roboto">Roboto</option>
      <option value="raleway">Raleway</option>
      <option value="loto">Loto</option>
    </Select>

    <Style label="Style" name="style" />
    <Color label="Color" name="color" />
    <Palette label="Palette" name="color" />
  </Form>
);

export default reduxForm({
  form: 'textForm',
  initialValues: {
    color: COLOR_DEFAULT,
    font: 'roboto',
    style: 'light',
  },
})(TextForm);
