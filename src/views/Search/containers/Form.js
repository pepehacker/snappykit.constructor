import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Input, Select, SelectItem } from 'components/Form';
import { VARIANT } from 'components/Form/components/Input';

import Store from '../components/Store';

// Ducks
import {
  STORE_APPLE_ID,
  SEARCH_FORM_ID,
} from '../ducks/constants';

// Entities
import { getCountryList } from 'entities/countries';

// Styles
import styles from './Form.scss';

const SearchForm = ({
  countries,
  handleSubmit,
}) => (
  <Form
    className={styles.Root}
    onSubmit={handleSubmit}
  >
    <Store name="store" />

    <div className={styles.Controls}>
      <Select
        name="country"
        placeholder="Choose a country"
        variant={VARIANT.FLAT}
      >
        {countries.map(({ id, name }) => (
          <SelectItem
            key={id}
            label={name}
            value={id}
          />
        ))}
      </Select>

      <Input
        name="name"
        placeholder="App name"
        variant={VARIANT.FLAT}
      />
    </div>
  </Form>
);

const mapStateToProps = (state: Object) => ({
  countries: getCountryList(state),
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: SEARCH_FORM_ID,
    initialValues: {
      country: 'US',
      store: STORE_APPLE_ID,
    },
  }),
)(SearchForm);
