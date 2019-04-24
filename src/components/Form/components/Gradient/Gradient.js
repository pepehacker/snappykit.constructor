// @flow
import classNames from 'classnames';
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
  TO: 'to',
};

type GradientType = {
  currentDirection: string,
  handleFromClick: Function,
  handleToClick: Function,
};

const Gradient = ({
  currentDirection,
  handleFromClick,
  handleToClick,
}: GradientType): React.Element<'div'> => (
  <div>
    <Angle label="Angle" name="gradient.angle" />
  </div>
);

const ComposedGradient = compose(
  withState('currentDirection', 'setCurrentDirection', DIRECTION.FROM),
  withHandlers({
    handleFromClick: ({ setCurrentDirection }): Function => () =>
      setCurrentDirection(DIRECTION.FROM),
    handleToClick: ({ setCurrentDirection }): Function => () => setCurrentDirection(DIRECTION.TO),
  }),
)(Gradient);

export default props => (
  <Field {...props} label={undefined}>
    <ComposedGradient />
  </Field>
);
