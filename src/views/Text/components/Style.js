import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';

// Utils
import { capitalize } from 'utils/string';

import styles from './Style.scss';

const TextStyle = ({
  handleClick,
  variants,
  value,
}) => (
  <div className={styles.Root}>
    {variants.map((variant, index) => {
      const className = classNames(styles.Style, styles[`StyleVariant${capitalize(variant)}`], {
        [styles.StyleIsCurrent]: value === variant,
      });

      return (
        <button
          className={className}
          key={index}
          onClick={() => handleClick(variant)}
          type="button"
        >
          {variant[0].toUpperCase()}
        </button>
      );
    })}
  </div>
);

const mapStateToProps = ({ views }) => ({
  variants: get(views, 'text.styles', []),
});

const ComposedTextStyle = compose(
  connect(mapStateToProps),
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
