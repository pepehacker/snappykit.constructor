import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Select } from 'components/Form';
import Mockup from './Mockup';

const SmartphoneForm = ({
  handleSubmit,
  model,
  style,
}) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Model" name="model" placeholder="Choose a model">
      <option value="iphone">iPhone 8</option>
      <option value="pixel">Pixel</option>
    </Select>

    <Select label="Style" name="style" placeholder="Choose a style">
      <option value="classic">Classic</option>
      <option value="concept">Concept</option>
      <option value="flat">Flat</option>
    </Select>

    <Mockup model={model} name="mockup" style={style} />
  </Form>
);

const selector = formValueSelector('smartphoneForm');
const mapStateToProps = state => selector(state, 'model', 'style');

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'smartphoneForm',
    initialValues: {
      mockup: 'classic-iphone-silver',
      model: 'iphone',
      style: 'classic'
    },
  }),
)(SmartphoneForm)
