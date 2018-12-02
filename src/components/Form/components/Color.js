/* eslint-disable */
import React, { Component } from 'react';
import { CustomPicker, CustomPointer } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';
import { compose, withHandlers } from 'recompose';

// Components
import Field from './Field';

import styles from './Color.scss';

class FormColor extends Component {
  handleChangeComplete = (data, event) => console.log(data);

  render() {
    const { hex, rgb } = this.props;
    const { r, g, b, a } = rgb;

    return (
      <div className={styles.Root}>
        <div className={styles.Preview}>
          <div
            className={styles.Color}
            style={{background: `rgba(${r}, ${g}, ${b}, ${a})` }}
          />

          <div>
            {hex}
          </div>
        </div>

        <div className={styles.Picker}>
          <div className={styles.Saturation}>
            <Saturation {...this.props}
              onChange={this.props.onChange}
              pointer={CustomPointer}
            />
          </div>

          <div className={styles.Hue}>
            <Hue {...this.props}
              onChange={this.props.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const ComposedFormColor = CustomPicker(FormColor);

export default props => (
  <Field {...props}>
    {({ onChange, ...fieldProps }) => (
      <ComposedFormColor {...fieldProps} onChange={color => (console.log('Super test', color))} />
    )}
  </Field>
);
