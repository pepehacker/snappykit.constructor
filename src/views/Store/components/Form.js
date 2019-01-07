import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Color, Link } from 'components/Form';
import ColorSwitcher from './ColorSwitcher';

// Entities
import { STORE_BACKGROUND, STORE_COLOR } from 'entities/template/constants';

// Styles
import styles from './Form.scss';

const StoreForm = ({
  handleSubmit,
  switcher = STORE_BACKGROUND,
  ...props,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootCurrentColor]: switcher === STORE_COLOR,
    [styles.RootCurrentBackground]: switcher === STORE_BACKGROUND,
  });

  return (
    <Form
      className={rootClassNames}
      onSubmit={handleSubmit}
    >
      <Link
        icon="fa-apple"
        label="App Store"
        name="appStore"
      />

      <Link
        icon="fa-google-play"
        label="Google Play"
        name="googlePlay"
      />

      <ColorSwitcher
        label="Color"
        name="switcher"
      />

      <div className={styles.Color}>
        <div className={styles.ColorTrack}>
          <Color name={STORE_BACKGROUND} />
          <Color name={STORE_COLOR} />
        </div>
      </div>
    </Form>
  );
};

const selector = formValueSelector('storeForm');
const mapStateToProps = (state: Object) => ({
  switcher: selector(state, 'switcher'),
});

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'storeForm' })
)(StoreForm);
