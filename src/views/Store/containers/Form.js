import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Color, Link } from 'components/Form';
import ColorSwitcher from '../components/ColorSwitcher';

// Entities
import { getWebsiteProvider } from 'entities/websites';

// Services
import { isPro } from 'services/session';

// Template
import { STORE_BACKGROUND, STORE_COLOR } from 'template';

// Styles
import styles from './Form.scss';

const StoreForm = ({
  handleSubmit,
  isPro,
  provider,
  switcher = STORE_BACKGROUND,
  ...props
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootCurrentColor]: switcher === STORE_COLOR,
    [styles.RootCurrentBackground]: switcher === STORE_BACKGROUND
  });

  return (
    <Form className={rootClassNames} onSubmit={handleSubmit}>
      <div className={styles.Group}>
        <Link
          icon="fa-apple"
          isPro={!isPro && provider === 2}
          label="App Store"
          name="items.apple"
        />

        <Link
          icon="fa-google-play"
          isPro={!isPro && provider === 1}
          label="Google Play"
          name="items.play"
        />
      </div>

      <ColorSwitcher label="Color" name="switcher" />

      <div className={styles.Color}>
        <div className={styles.ColorTrack}>
          <Color name={STORE_BACKGROUND} />
          <Color name={STORE_COLOR} />
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps: Function = (
  state: Object,
  { form, websiteId }
): Object => {
  const selector = formValueSelector(form);

  return {
    isPro: isPro(state),
    provider: getWebsiteProvider(state),
    switcher: selector(state, 'switcher')
  };
};

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'storeForm' })
)(StoreForm);
