// @flow
import classNames from 'classnames';
import * as React from 'react';

// Components
import { Field } from 'components/Form';

// Styles
import styles from './Angle.scss';

// Utils
import { generateDivision } from '../utils';

type GradientAngleType = {
  id: string,
  lenght: number,
  max: number,
  min: number,
  name: string,
  onChange: Function,
  value: number,
};

const GradientAngle = ({
  id,
  lenght = 16,
  max = 360,
  min = 0,
  name,
  onChange,
  value = 0,
}: GradientAngleType): React.Element<'div'> => {
  const percent = (value / max) * 100;

  return (
    <div className={styles.Root}>
      <div className={styles.Division}>
        <div className={styles.List}>
          {generateDivision(min, max, lenght).map((value, index) => {
            const isPoint = index === 0 || index % (lenght / 4) === 0;

            const valueClassNames = classNames(styles.Value, {
              [styles.ValueVariantPoint]: isPoint,
            });

            return (
              <div key={index} className={valueClassNames}>
                {isPoint && <div className={styles.Point}>
                  {value}
                </div>}
              </div>
            );
          })}
        </div>

        <div
          className={styles.Angle}
          style={{
            left: `calc(${(value / max) * 100}% - 1px)`,
          }}
        >
          <div className={styles.AngleValue}>
            {value}
          </div>
        </div>
      </div>

      <div className={styles.Control}>
        <input
          className={styles.Range}
          id={id}
          max={max}
          min={min}
          name={name}
          onChange={onChange}
          style={{
            background: `linear-gradient(to right, #ebebeb ${percent -
              20}%, #9e9ae2 ${percent}%, #ebebeb ${percent + 20}%)`,
            left: `calc(${percent}% - 52px)`,
          }}
          type="range"
          value={value}
        />
      </div>
    </div>
  );
};

export default props => (
  <Field {...props}>
    <GradientAngle />
  </Field>
);
