/* eslint-disable */
import { get } from 'lodash';
import React from 'react';
import { compose, withHandlers } from 'recompose';
import ImageCompressor from 'image-compressor.js';

// Components
import { Field } from 'components/Form';

// Styles
import styles from './File.scss';

const IconField = ({ handleChange, name, value }) => (
  <div className={styles.Root}>
    <div className={styles.Preview}>
      <label className={styles.Label} htmlFor={name}>
        <img alt="Icon Logo" className={styles.Icon} src={value} />

        <div className={styles.Refresh} />

        <input
          className={styles.Input}
          id={name}
          name={name}
          onChange={handleChange}
          type="file"
        />
      </label>
    </div>

    <div className={styles.Title}>123</div>
  </div>
);

const ComposedIconField = compose(
  withHandlers({
    handleChange: ({ onChange }) => (event: Object) => {
      const file = get(event, 'target.files.0');

      if (file) {
        new ImageCompressor(file, {
          height: 1334,
          quality: 0.8,
          width: 750,
          success: (result) => {
            const reader = new FileReader();

            reader.readAsDataURL(result);
            reader.onload = () => onChange && onChange(reader.result);
          }
        });
      }
    }
  })
)(IconField);

export default (props) => (
  <Field {...props}>
    <ComposedIconField />
  </Field>
);
