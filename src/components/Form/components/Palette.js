import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import Field from './Field';

import styles from './Palette.scss';

const FormPalette = ({ colors, handleClick, handleCreate, value }) => (
  <div className={styles.Root}>
    {colors.map((color, index) => {
      const className = classNames(styles.Color, {
        [styles.ColorIsCurrent]: value === color
      });

      return (
        <button
          key={index}
          className={className}
          onClick={() => handleClick(color)}
          style={{ background: color }}
          type="button"
        />
      );
    })}

    <button className={styles.Create} onClick={handleCreate} type="button" />
  </div>
);

const mapStateToProps = ({ services }) => ({
  colors: get(services, 'palette.items', [])
});

const ComposedFormPalette = compose(
  connect(mapStateToProps),
  withHandlers({
    handleClick: ({ onChange }) => (value) => onChange && onChange(value),
    handleCreate: () => () => console.log('Create new color!') // eslint-disable-line
  })
)(FormPalette);

export default (props) => (
  <Field {...props}>
    <ComposedFormPalette />
  </Field>
);

export const CustomPalette = ComposedFormPalette;
