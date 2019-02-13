import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Color, Select } from 'components/Form';
import Gradient from '../components/Gradient';

// Entities
import { updateTemplate } from 'entities/template/actions';
import { BACKGROUND } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

const BackgroundForm = ({
  category,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Category" name="category" placeholder="Choose a category">
      <option value="color">Color</option>
      <option value="gradient">Gradient</option>
    </Select>

    {category === 'color' && <Color label="Color"  name="color" />}
    {category === 'gradient' && <Gradient label="Gradient" name="gradient" />}
  </Form>
);

const selector = formValueSelector('backgroundForm');
const mapStateToProps = (state: Object) => ({
  category: selector(state, 'category'),
  initialValues: {
    ...getFieldById(state, BACKGROUND),
    category: 'gradient',
  },
});

export default compose(
  connect(mapStateToProps, { updateTemplate }),
  reduxForm({
    form: 'backgroundForm',
    onChange: (value: Object, dispatch: func, { updateTemplate }): void =>
      updateTemplate(BACKGROUND, value),
  }),
)(BackgroundForm);
