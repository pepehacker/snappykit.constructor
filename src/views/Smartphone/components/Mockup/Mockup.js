/* eslint-disable */
import classNames from 'classnames';
import { keys, get } from 'lodash';
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
import { SMARTPHONE_MOCKUP } from 'template/config';

type SmartphoneMockupPropTypes = {
  handleClick: (SyntheticEvent) => void,
  isPro: boolean,
  model: SMARTPHONE_MODEL.IPHONE | SMARTPHONE_MODEL.PIXEL,
  style:
    | SMARTPHONE_STYLE.CLASSIC
    | SMARTPHONE_STYLE.CONCEPT
    | SMARTPHONE_STYLE.FLAT,
  value: number | string
};

const SmartphoneMockup = ({
  handleClick,
  isPro,
  model,
  style,
  value
}: SmartphoneMockupPropTypes): React.Element<'div'> => {
  const list = React.useMemo(
    () =>
      keys(SMARTPHONE_MOCKUP).filter(
        (id) =>
          SMARTPHONE_MOCKUP[id].model === model &&
          SMARTPHONE_MOCKUP[id].style === style
      ),
    [model, style]
  );

  return (
    <div className={styles.Root}>
      {list.map((id: string) => (
        <Mockup
          id={id}
          isCurrent={id === value}
          key={id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state, { form, model, style }) => {
  const selector = formValueSelector(form || SMARTPHONE_FORM_ID);

  return {
    isPro: isPro(state),
    model: selector(state, 'model'),
    style: selector(state, 'style')
  };
};

const ComposedSmartphoneMockup = compose(
  connect(mapStateToProps),
  withHandlers({
    handleClick: ({ onChange }) => (value) => onChange && onChange(value)
  })
)(SmartphoneMockup);

export default ({ form, ...props }) => (
  <Field {...props}>
    <ComposedSmartphoneMockup form={form} />
  </Field>
);
