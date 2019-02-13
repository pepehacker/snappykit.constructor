import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Select, SelectItem } from 'components/Form';
import Mockup from '../components/Mockup';

// Entities
import { updateTemplate } from 'entities/template/actions';
import {
  SMARTPHONE,
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
    <Select
      label="Model"
      name="model"
      placeholder="Choose a model"
    >
      {get(SMARTPHONE_MODEL, 'values', [])
        .map(({ label, value: itemValue }): func => (
          <SelectItem
            key={itemValue}
            label={label}
            value={itemValue}
          />
        ))}
    </Select>

    <Select label="Style" name="style" placeholder="Choose a style">
      {get(SMARTPHONE_STYLE, 'values', [])
        .map(({ label, value: itemValue }): func => (
          <SelectItem
            key={itemValue}
            label={label}
            value={itemValue}
          />
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
    ...getFieldById(state, SMARTPHONE),
    model: SMARTPHONE_MODEL.IPHONE,
    style: SMARTPHONE_STYLE.FLAT,
  },
});

export default compose(
  connect(mapStateToProps, { updateTemplate }),
  reduxForm({
    form: 'smartphoneForm',
    onChange: (value: Object, dispatch: func, { updateTemplate }): void =>
      updateTemplate(SMARTPHONE, value),
  }),
)(SmartphoneForm)
