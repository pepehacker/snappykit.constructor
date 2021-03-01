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

// Entities
import { saveWebsite } from 'entities/websites';

// Services
import { openModal } from 'services/modals';
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
  initialValues,
  isPro,
  onSubmit,
  openModal,
  submitting,
  ...props
}: DomaiSubFormPropTypes): React.Element<typeof Form> => {
  // const domain = get(initialValues, 'domain');
  // const hasDomain = typeof domain === 'string' && domain.trim() !== '';

  // Handlers
  const handleClick = React.useCallback(() => openModal('domainGuide'), []);

  return (
    <Form onSubmit={handleSubmit}>
      <div className={style.Group}>
        <div>
          <Input isPro={!isPro} label="Domain" name="domain" />

          {isPro && (
            <>
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

              <div className={style.Ns}>
                <div className={style.NsTitle}>
                  Enter NS servers at registar (
                  <span className={style.Guide} onClick={handleClick}>
                    Do not know how?
                  </span>
                  ):
                </div>

                <div className={style.NsDescription}>
                  NS1: ns1.digitalocean.com
                  <br />
                  NS2: ns2.digitalocean.com
                  <br />
                  NS3: ns3.digitalocean.com
                </div>
              </div>
            </>
          )}
        </div>

        {!isPro && (
          <div>
            <Input
              disabled={isPro}
              format={(value) => value && value.replace('.snappykit.com', '')}
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
          </div>
        )}
      </div>
    </Form>
  );
};

const mapStateToProps: Function = (state) => ({
  isPro: isPro(state)
});

export default compose(
  connect(mapStateToProps, { openModal, saveWebsite }),
  reduxForm({
    form: SUB_FORM_ID,
    onSubmit: (value, type, { applyChanges, saveWebsite, websiteId }) =>
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
              saveWebsite(websiteId);
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
        matches(/^[A-z0-9]{1,12}\.snappykit\.com$/, 'Invalid subdomain!')
      ]
    })
  })
)(DomaiSubForm);
