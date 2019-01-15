import classNames from 'classnames';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';

// Entities
import { TEXT_STYLE_VALUES } from 'entities/template/constants';

// Utils
import { capitalize } from 'utils/string';

import styles from './Style.scss';

const TextStyle = ({
  handleClick,
  value,
}) => (
  <div className={styles.Root}>
    {TEXT_STYLE_VALUES.map(({ label, value: styleValue }) => {
      const className = classNames(styles.Style, styles[`StyleVariant${capitalize(label)}`], {
        [styles.StyleIsCurrent]: value === styleValue,
      });

      return (
        <button
          className={className}
          key={styleValue}
          onClick={() => handleClick(styleValue)}
          type="button"
        >
          {label[0].toUpperCase()}
        </button>
      );
    })}
  </div>
);

const ComposedTextStyle = compose(
  withHandlers({
    handleClick: ({ onChange }) => value =>
      onChange && onChange(value),
  }),
)(TextStyle);

export default props => (
  <Field {...props}>
    <ComposedTextStyle />
  </Field>
);
