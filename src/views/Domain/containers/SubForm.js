import * as React from 'react';
import { reduxForm } from 'redux-form';

// Components
import Button from 'components/Button';
import Form, { Input } from 'components/Form';

// Ducks
import { SUB_FORM_ID } from '../ducks';

// Styles
import style from './common.scss';

// Utils
import validate, { matches, required } from 'utils/validate';

type DomaiSubFormPropTypes = {
  handleSubmit: SyntheticEvent => void,
};

const DomaiSubForm = ({
  handleSubmit,
}: DomaiSubFormPropTypes): React.Element<typeof Form> => (
  <Form onSubmit={handleSubmit}>
    <Input
      format={value => value && value.replace('.snappykit.com', '')}
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

export default reduxForm({
  form: SUB_FORM_ID,
  validate: validate({
    domain: [
      required(),
      matches(/^[A-z0-9]{6}\.snappykit\.com$/, 'Invalid subdomain!'),
    ],
  }),
})(DomaiSubForm);
