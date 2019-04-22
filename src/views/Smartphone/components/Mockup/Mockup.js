/* eslint-disable */
import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { formValueSelector } from 'redux-form';

// Components
import { Field } from 'components/Form';
import Mockup from './components/Item';

// Ducks
import { SMARTPHONE_FORM_ID, MOCKUP_ITEMS } from '../../ducks/constants';

// Styles
import styles from './Mockup.scss';

const SmartphoneMockup = ({ handleClick, model, style, value }) => (
  <div className={styles.Root}>
    {console.log(MOCKUP_ITEMS, model, style, value)}
    {get(MOCKUP_ITEMS, `${model}.${style}`, []).map((id: string) => (
      <Mockup id={id} isCurrent={id === value} key={id} model={model} onClick={handleClick} />
    ))}
  </div>
);

SmartphoneMockup.propTypes = {
  model: PropTypes.string,
  style: PropTypes.string,
};

const selector = formValueSelector(SMARTPHONE_FORM_ID);
const mapStateToProps = (state, { model, style }) => ({
  model: selector(state, 'model'),
  style: selector(state, 'style'),
});

const ComposedSmartphoneMockup = compose(
  connect(mapStateToProps),
  withHandlers({
    handleClick: ({ onChange }) => value => onChange && onChange(value),
  }),
)(SmartphoneMockup);

export default props => (
  <Field {...props}>
    <ComposedSmartphoneMockup />
  </Field>
);
