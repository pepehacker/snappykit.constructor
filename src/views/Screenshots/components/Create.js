/* eslint-disable */
import { get } from 'lodash';
import React from 'react';
import { compose, withHandlers } from 'recompose';
import ImageCompressor from 'image-compressor.js';

// Styles
import styles from './Create.scss';

const ScreenshotsCreate = ({
  handleChange,
}) => (
  <div className={styles.Root}>
    <label
      className={styles.Label}
      htmlFor="screenshotsUpload"
    >
      <div className={styles.Icon} />
    </label>

    <input
      accept="image/jpg,image/jpeg,image/png"
      className={styles.Input}
      id="screenshotsUpload"
      onChange={handleChange}
      type="file"
    />
  </div>
);

export default compose(
  withHandlers({
    handleChange: ({ onCreate }) => (event: Object) => {
      const file = get(event, 'target.files.0');

      if (file) {
        new ImageCompressor(file, {
          height: 1334,
          quality: .8,
          width: 750,
          success: (result) => {
            const reader = new FileReader();

            reader.readAsDataURL(result);
            reader.onload = () => onCreate && onCreate(reader.result);
          },
        });
      }
    },
  })
)(ScreenshotsCreate);
