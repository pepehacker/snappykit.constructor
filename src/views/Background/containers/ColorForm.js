// @flow
// import { get } from 'lodash';
import * as React from 'react';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color } from 'components/Form';

// Template
import { BACKGROUND_COLOR } from 'template';

const BackgroundColorForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Color name={BACKGROUND_COLOR} />
  </Form>
);

export default compose(
  reduxForm(),
  // lifecycle({
  //   componentDidMount() {
  //     const { change, initialValues } = this.props;

  //     change(
  //       BACKGROUND_COLOR,
  //       get(initialValues, BACKGROUND_COLOR, 'rgba(94, 122, 219, 0.5)'),
  //     );
  //   },
  // }),
)(BackgroundColorForm);
