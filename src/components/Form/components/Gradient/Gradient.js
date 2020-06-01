// @flow
import { get } from 'lodash';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Components
import { Color, Field } from 'components/Form';
import Angle from './components/Angle';

// Styles
import styles from './Gradient.scss';

const DIRECTION = {
  FROM: 'from',
  TO: 'to'
};

type GradientType = {
  currentDirection: string,
  handleFromClick: Function,
  handleToClick: Function
};

const Gradient = ({
  currentDirection,
  handleFromClick,
  handleToClick,
  name = 'gradient',
  value
}: GradientType): React.Element<'div'> => (
  <div className={styles.Root}>
    <div className={styles.Preview}>
      <div
        className={styles.From}
        onClick={handleFromClick}
        role="button"
        style={{ background: get(value, 'from') }}
        tabIndex={0}
      />

      <div
        className={styles.Gradient}
        style={{
          backgroundImage: `linear-gradient(to right, ${get(
            value,
            'from'
          )}, ${get(value, 'to')})`
        }}
      />

      <div
        className={styles.To}
        onClick={handleToClick}
        role="button"
        style={{ background: get(value, 'to') }}
        tabIndex={0}
      />
    </div>

    <div className={styles.Angle}>
      <Angle label="Angle" name={`${name}.angle`} />
    </div>

    <div className={styles.Colors}>
      {currentDirection === DIRECTION.FROM && (
        <Color label="From" name={`${name}.from`} />
      )}
      {currentDirection === DIRECTION.TO && (
        <Color label="To" name={`${name}.to`} />
      )}
    </div>
  </div>
);

const ComposedGradient = compose(
  withState('currentDirection', 'setCurrentDirection', DIRECTION.FROM),
  withHandlers({
    handleFromClick: ({ setCurrentDirection }): Function => () =>
      setCurrentDirection(DIRECTION.FROM),
    handleToClick: ({ setCurrentDirection }): Function => () =>
      setCurrentDirection(DIRECTION.TO)
  })
)(Gradient);

export default (props) => (
  <Field {...props} label={undefined}>
    <ComposedGradient />
  </Field>
);
