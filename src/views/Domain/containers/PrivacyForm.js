import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Textarea } from 'components/Form';

// Ducks
import { PRIVACY_FORM_ID } from '../ducks';

// Services
import { isPro } from 'services/session';

// Styles
import styles from './common.scss';

// Utils
import validate, { max } from 'utils/validate';

type DomainPrivacyFormPropTypes = {
  handleSubmit: SyntheticEvent => void,
  isPro: boolean,
};

const DomainPrivacyForm = ({
  handleSubmit,
  isPro,
}: DomainPrivacyFormPropTypes): React.Element<typeof Form> => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Group}>
      <Textarea
        classNames={{
          textarea: styles.Textarea,
        }}
        isPro={!isPro}
        label="Terms of use"
        max={100000}
        name="terms"
      />

      <Textarea
        classNames={{
          textarea: styles.Textarea,
        }}
        isPro={!isPro}
        label="Privacy policy"
        max={100000}
        name="privacy"
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
    form: PRIVACY_FORM_ID,
    validate: validate({
      privacy: [max(100000, 'Max 100k letters!')],
      terms: [max(100000, 'Max 100k letters!')],
    }),
  }),
)(DomainPrivacyForm);
