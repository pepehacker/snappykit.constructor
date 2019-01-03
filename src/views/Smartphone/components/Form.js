import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Select } from 'components/Form';
import Mockup from './Mockup';

// Entities
import { updateTemplate } from 'entities/template/actions';
import {
  SMARTPHONE,
  SMARTPHONE_MOCKUP,
  SMARTPHONE_MODEL,
  SMARTPHONE_STYLE,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

const SmartphoneForm = ({
  handleSubmit,
  model,
  style,
}) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Model" name="model" placeholder="Choose a model">
      {get(SMARTPHONE_MODEL, 'values', []).map(({ label, value }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </Select>

    <Select label="Style" name="style" placeholder="Choose a style">
      {get(SMARTPHONE_STYLE, 'values', []).map(({ label, value }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </Select>

    <Mockup
      model={model}
      name="mockup"
      style={style}
    />
  </Form>
);

const selector = formValueSelector('smartphoneForm');
const mapStateToProps = (state: Object) => ({
  ...selector(state, 'model', 'style'),
  initialValues: {
    mockup: getFieldById(state, SMARTPHONE),
    model: SMARTPHONE_MODEL.IPHONE,
    style: SMARTPHONE_STYLE.FLAT,
  },
});

export default compose(
  connect(mapStateToProps, { updateTemplate }),
  reduxForm({
    form: 'smartphoneForm',
    initialValues: {
      mockup: SMARTPHONE_MOCKUP.FLAT_IPHONE_SILVER,
      model: SMARTPHONE_MODEL.IPHONE,
      style: SMARTPHONE_STYLE.FLAT,
    },
    onChange: ({ mockup }, dispatch: func, { updateTemplate }): void =>
      updateTemplate(SMARTPHONE, mockup),
  }),
)(SmartphoneForm)
