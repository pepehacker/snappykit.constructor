import React from 'react';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';

// Styles
import styles from './Palette.scss';

const SmartphonePalette = ({ colors = {}, handleItemClick }) => (
  <div className={styles.Root}>
    {Object.keys(colors).map((key) => (
      <div
        key={key}
        className={styles.Item}
        data-color={colors[key]}
        onClick={handleItemClick}
        role="button"
        tabIndex={0}
      >
        <div
          className={styles.Cover}
          style={{ backgroundColor: colors[key] }}
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
