import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

// Components
import { Color, Field } from 'components/Form';

// Styles
import styles from './Gradient.scss';

const VARIANT = {
  FROM: 'from',
  TO: 'to',
};

const BackgroundGradient = ({
  variant,
  value,

  // Handlers
  handleClick,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootVariantFrom]: variant === VARIANT.FROM,
    [styles.RootVariantTo]: variant === VARIANT.TO,
  });

  return (
    <div className={rootClassNames}>
      <div className={styles.Preview}>
        <div className={styles.PreviewWrapper}>
          <div
            className={styles.From}
            onClick={() => handleClick(VARIANT.FROM)}
            role="button"
            style={{
              background: get(value, 'from'),
            }}
            tabIndex={0}
          />

          <div
            className={styles.Gradient}
            style={{
              backgroundImage: `linear-gradient(to right, ${get(value, 'from')}, ${get(
                value,
                'to',
              )})`,
            }}
          />

          <div
            className={styles.To}
            onClick={() => handleClick(VARIANT.TO)}
            role="button"
            style={{
              background: get(value, 'to'),
            }}
            tabIndex={0}
          />
        </div>
      </div>

      <div className={styles.List}>
        <div className={styles.Track}>
          <Color label="From" name="gradient.from" />
          <Color label="To" name="gradient.to" />
        </div>
      </div>
    </div>
  );
};

BackgroundGradient.propTypes = {
  handleClick: PropTypes.func,
  variant: PropTypes.oneOf([VARIANT.FROM, VARIANT.TO]),
  value: PropTypes.shape({
    angle: PropTypes.number,
    from: PropTypes.string,
    to: PropTypes.string,
  }),
};

const ComposedBackgroundGradient = compose(
  withState('variant', 'setVariant', VARIANT.FROM),
  withHandlers({
    handleClick: ({ setVariant }): func => (variant: string): void => setVariant(variant),
  }),
)(BackgroundGradient);

export default (props: Object) => (
  <Field {...props} label={undefined}>
    <ComposedBackgroundGradient />
  </Field>
);
