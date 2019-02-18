import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Color, Select, SelectItem } from 'components/Form';
import Gradient from '../components/Gradient';
import Image from '../components/Image';

// Entities
import { updateTemplate } from 'entities/template/actions';
import {
  BACKGROUND,
  BACKGROUND_COLOR,
  BACKGROUND_GRADIENT,
  BACKGROUND_IMAGE,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

const BackgroundForm = ({
  category,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Select label="Category" name="category" placeholder="Choose a category">
      <SelectItem label="Color" value={BACKGROUND_COLOR} />
      <SelectItem label="Gradient" value={BACKGROUND_GRADIENT} />
      <SelectItem label="Image" value={BACKGROUND_IMAGE} />
    </Select>

    {category === BACKGROUND_COLOR && <Color label="Color"  name={BACKGROUND_COLOR} />}
    {category === BACKGROUND_GRADIENT && <Gradient label="Gradient" name={BACKGROUND_GRADIENT} />}
    {category === BACKGROUND_IMAGE && <Image name={BACKGROUND_IMAGE} />}
  </Form>
);

const selector = formValueSelector('backgroundForm');
const mapStateToProps = (state: Object) => ({
  category: selector(state, 'category'),
  initialValues: {
    ...getFieldById(state, BACKGROUND),
    category: BACKGROUND_GRADIENT,
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
