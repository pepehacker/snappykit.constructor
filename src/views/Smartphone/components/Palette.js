import React from 'react';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';
import { IPHONE_12_PRO_FLAT_COLOR } from 'components/Smartphone/models/IPhone12Pro';

// Styles
import styles from './Palette.scss';

const SmartphonePalette = ({ handleItemClick }) => (
  <div className={styles.Root}>
    {Object.keys(IPHONE_12_PRO_FLAT_COLOR).map((key) => (
      <div
        key={key}
        className={styles.Item}
        onClick={handleItemClick}
        role="button"
        tabIndex={0}
      >
        <div
          className={styles.Cover}
          style={{ backgroundColor: IPHONE_12_PRO_FLAT_COLOR[key] }}
        />

        <div className={styles.Title}>{key.replace('_', ' ')}</div>
      </div>
    ))}
  </div>
);

const ComposedSmartphonePalette = compose(
  withHandlers({
    handleItemClick: ({ onChange }) => (event) =>
      onChange && onChange(event.currentTarget.dataset.color)
  })
)(SmartphonePalette);

export default (props) => (
  <Field {...props}>
    <ComposedSmartphonePalette />
  </Field>
);
