import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Input, Textarea } from 'components/Form';

// Services
import { isPro } from 'services/session';

// Style
import style from './common.scss';

// Utils
import validate, { max, required } from 'utils/validate';

type DomainPrivacyFormPropTypes = {
  handleSubmit: SyntheticEvent => void,
  isPro: boolean,
};

const DomainSeoForm = ({ handleSubmit, isPro }: DomainPrivacyFormPropTypes): React.Element<typeof Form> => (
  <Form onSubmit={handleSubmit}>
    <div className={style.Group}>
      <Input
        isPro={!isPro} label="Title"
        max={100} name="title"
      />

      <Textarea
        classNames={{
          textarea: style.Textarea,
        }}
        isPro={!isPro}
        label="Description"
        max={200}
        name="description"
      />

      <Textarea
        classNames={{
          textarea: style.Textarea,
        }}
        isPro={!isPro}
        label="Keywords"
        max={400}
        name="keywords"
      />
    </div>
  </Form>
);

const mapStateToProps: Function = state => ({
  isPro: isPro(state),
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'seoForm',
    validate: validate({
      description: [max(200, 'Max 200 letters!')],
      keywords: [max(400, 'Max 400 letters!')],
      title: [required(), max(100, 'Max 100 letters!')],
    }),
  }),
)(DomainSeoForm);
