// @flow
// import { get } from 'lodash';
import * as React from 'react';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Gradient } from 'components/Form';

// Template
import { BACKGROUND_GRADIENT } from 'template';

const BackgroundGradientForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Gradient name={BACKGROUND_GRADIENT} />
  </Form>
);

export default compose(
  reduxForm()
  // lifecycle({
  //   componentDidMount() {
  //     const { change, initialValues } = this.props;

  //     change(
  //       BACKGROUND_GRADIENT,
  //       get(initialValues, BACKGROUND_GRADIENT, {
  //         angle: 0,
  //         from: 'rgba(94, 122, 219, 0.5)',
  //         to: 'rgba(131, 89, 193, 0.5)',
  //       }),
  //     );
  //   },
  // }),
)(BackgroundGradientForm);
