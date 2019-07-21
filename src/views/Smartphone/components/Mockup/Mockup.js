/* eslint-disable */
import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { formValueSelector } from 'redux-form';

// Components
import { Field } from 'components/Form';
import Mockup from './components/Item';

// Ducks
import { SMARTPHONE_FORM_ID, MOCKUP_ITEMS } from '../../ducks/constants';

// Services
import { isPro } from 'services/session';

// Styles
import styles from './Mockup.scss';

// Template
import { SMARTPHONE_MODEL, SMARTPHONE_PRO_LIST } from 'template/config';

type SmartphoneMockupPropTypes = {
  handleClick: SyntheticEvent => void,
  isPro: boolean,
  model: SMARTPHONE_MODEL.IPHONE | SMARTPHONE_MODEL.PIXEL,
  style:
    | SMARTPHONE_STYLE.CLASSIC
    | SMARTPHONE_STYLE.CONCEPT
    | SMARTPHONE_STYLE.FLAT,
  value: number | string,
};

const SmartphoneMockup = ({
  handleClick,
  isPro,
  model,
  style,
  value,
}: SmartphoneMockupPropTypes): React.Element<'div'> => (
  <div className={styles.Root}>
    {get(MOCKUP_ITEMS, `${model}.${style}`, []).map((id: string) => (
      <Mockup
        id={id}
        isCurrent={id === value}
        isPro={!isPro && SMARTPHONE_PRO_LIST.indexOf(id) > -1}
        key={id}
        model={model}
        onClick={handleClick}
      />
    ))}
  </div>
);

const selector = formValueSelector(SMARTPHONE_FORM_ID);
const mapStateToProps = (state, { model, style }) => ({
  isPro: isPro(state),
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
