import { get } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm, SubmissionError } from 'redux-form';

// Api
import api from 'api';

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
  handleSubmit: (SyntheticEvent) => void,
  isPro: boolean
};

const VARIANT = {
  DOMAIN: 'domain',
  DOMAIN_FREE: 'domain_free'
};

const DomaiSubForm = ({
  handleSubmit,
  isPro,
  onSubmit,
  submitting,
  ...props
}: DomaiSubFormPropTypes): React.Element<typeof Form> => (
  <Form onSubmit={handleSubmit}>
    <Input
      format={(value) => value && value.replace('.snappykit.com', '')}
      // isPro={!isPro}
      label="Subdomain"
      name="domain_free"
      parse={(value) => value && `${value}.snappykit.com`}
      postfix=".snappykit.com"
    />

    <div className={style.Actions}>
      <Button
        loaded={submitting}
        onClick={handleSubmit((values) =>
          onSubmit(values.domain_free, VARIANT.DOMAIN_FREE, props)
        )}
        variant="form"
      >
        Add Subdomain
      </Button>
    </div>

    <Input isPro={!isPro} label="Domain" name="domain" />

    <div className={style.Actions}>
      <Button
        loaded={submitting}
        onClick={handleSubmit((values) =>
          onSubmit(values.domain, VARIANT.DOMAIN, props)
        )}
        variant="form"
      >
        Add Domain
      </Button>
    </div>
  </Form>
);

const mapStateToProps: Function = (state) => ({
  isPro: isPro(state)
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: SUB_FORM_ID,
    onSubmit: (value, type, { applyChanges, websiteId }) =>
      api('websites.getApp', { domain: value }, { noCredentials: true })
        .then(({ data }) => {
          const id = get(data, 'id');

          if (id === websiteId) {
            throw new Error('Ok!');
          } else {
            throw new SubmissionError('Taken!');
          }
        })
        .catch((error) => {
          switch (error.message) {
            case 'Taken!':
              throw new SubmissionError(
                type === VARIANT.DOMAIN
                  ? { domain: 'Taken!' }
                  : { domain_free: 'Taken!' }
              );
            default:
              applyChanges(
                type === VARIANT.DOMAIN
                  ? { domain: value }
                  : { domain_free: value }
              );
              break;
          }
        }),
    validate: validate({
      domain: [
        matches(
          /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/,
          'Invalid domain!'
        )
      ],
      domain_free: [
        required(),
        matches(/^[A-z0-9]{6}\.snappykit\.com$/, 'Invalid subdomain!')
      ]
    })
  })
)(DomaiSubForm);
