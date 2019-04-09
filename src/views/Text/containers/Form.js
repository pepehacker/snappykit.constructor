import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Select, SelectItem, Textarea } from 'components/Form';
import Style from '../components/Style';

// Entities
import { TEXT_FONT, TEXT_FONT_VALUES, TEXT_STYLE } from 'entities/template/constants';

const TextForm = ({ handleSubmit, withText }) => (
  <Form onSubmit={handleSubmit}>
    {withText && <Textarea
      label="Text" name="text"
      placeholder="Set Text"
    />}

    <Select
      label="Font" name="font"
      placeholder="Choose a font"
    >
      {TEXT_FONT_VALUES.map(
        (name: string): func => (
          <SelectItem
            key={name} label={name}
            value={name}
          />
        ),
      )}
    </Select>

    <Style label="Style" name="style" />
    <Color label="Color" name="color" />
    {/* <Palette label="Palette" name="color" /> */}
  </Form>
);

TextForm.propTypes = {
  withText: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'textForm',
    initialValues: {
      font: TEXT_FONT.ROBOTO,
      style: TEXT_STYLE.LIGHT,
    },
  }),
)(TextForm);
