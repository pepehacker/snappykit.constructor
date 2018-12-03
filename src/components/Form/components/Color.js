/* eslint-disable */
import React, { Component } from 'react';
import { CustomPicker, CustomPointer } from 'react-color';
import { Alpha, Hue, Saturation } from 'react-color/lib/components/common';
import { compose, withHandlers } from 'recompose';

// Components
import Field from './Field';

import styles from './Color.scss';

const FormColor = ({
  onChange,
  value,
}) => {
  const { hex, rgb } = value;
  const { r, g, b, a } = rgb;

  return (
    <div className={styles.Root}>
      <div className={styles.Section}>
        <div className={styles.Preview}>
          <div
            className={styles.Color}
            style={{ background: `rgba(${r}, ${g}, ${b}, ${a})` }}
          />

          <div className={styles.Hex}>
            {hex}
          </div>
        </div>


        <div className={styles.Alpha}>
          <Alpha {...value} onChange={onChange} />
        </div>
      </div>

      <div className={styles.Section}>
        <div className={styles.Saturation}>
          <Saturation {...value}
            onChange={onChange}
            pointer={CustomPointer}
          />
        </div>

        <div className={styles.Hue}>
          <Hue {...value} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

const ComposedFormColor = CustomPicker(FormColor);

export default props => (
  <Field {...props}>
    {({ onChange, ...fieldProps }) => (
      <ComposedFormColor {...fieldProps}
        onChange={onChange}
      />
    )}
  </Field>
);

export const COLOR_DEFAULT = {
  hex: '#ffffff',
  color: { h: 0,   s: 0,   l: 1,   a: 1 },
  hsl:   { h: 0,   s: 0,   l: 1,   a: 1 },
  hsv:   { h: 0,   s: 0,   v: 1,   a: 1 },
  rgb:   { r: 255, g: 255, b: 255, a: 1 },
};
