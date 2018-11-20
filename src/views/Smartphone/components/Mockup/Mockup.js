/* eslint-disable */
import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';
import Mockup from './components/Item';

import styles from './Mockup.scss';

const SmartphoneMockup = ({
  handleClick,
  mockups,
  model,
  style,
  value,
}) => (
  <div className={styles.Root}>
    {mockups.map(mockup => (
      <Mockup {...mockup}
        isCurrent={mockup.id === value}
        key={mockup.id}
        onClick={handleClick}
      />
    ))}
  </div>
);

SmartphoneMockup.propTypes = {
  model: PropTypes.string,
  style: PropTypes.string,
};

const mapStateToProps = ({ views }, { model, style }) => ({
  mockups: get(views, 'smartphone.items', [])
    .filter(mockup => mockup.model === model && mockup.style === style),
});

const ComposedSmartphoneMockup = compose(
  connect(mapStateToProps),
  withHandlers({
    handleClick: ({ onChange }) => value =>
      onChange && onChange(value),
  }),
)(SmartphoneMockup);

export default props => (
  <Field {...props}>
    <ComposedSmartphoneMockup />
  </Field>
);
