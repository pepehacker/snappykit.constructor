import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Button from 'components/Button';
import Form, { Input } from 'components/Form';

// Ducks
import { SUB_FORM_ID } from '../ducks';

// Services
import { isPro } from 'services/session';

// Styles
import style from './common.scss';

// Utils
import validate, { matches, required } from 'utils/validate';

type DomaiSubFormPropTypes = {
  handleSubmit: SyntheticEvent => void,
  isPro: boolean,
};

const DomaiSubForm = ({
  handleSubmit,
  isPro,
}: DomaiSubFormPropTypes): React.Element<typeof Form> => (
  <Form onSubmit={handleSubmit}>
    <Input
      format={value => value && value.replace('.snappykit.com', '')}
      isPro={!isPro}
      label="Subdomain"
      max={100}
      name="domain"
      parser={value => value && `${value}.snappykit.com`}
      postfix=".snappykit.com"
    />

    <div className={style.Actions}>
      <Button type="submit" variant="form">
        Add Domain
      </Button>
    </div>
  </Form>
);

const mapStateToProps: Function = state => ({
  isPro: isPro(state),
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: SUB_FORM_ID,
    validate: validate({
      domain: [
        required(),
        matches(/^[A-z0-9]{6}\.snappykit\.com$/, 'Invalid subdomain!'),
      ],
    }),
  }),
)(DomaiSubForm);
