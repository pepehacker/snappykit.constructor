import React from 'react';

// Components
import { Field } from 'components/Form';
import Card from './components/Card';

// Entities
import { BACKGROUND_LIST } from 'entities/template';

// Styles
import styles from './Image.scss';

const BackgroundImage = ({
  onChange,
  value,
}) => (
  <div className={styles.Root}>
    <div className={styles.List}>
      {BACKGROUND_LIST.map((src: string, index: number): func => (
        <Card
          isSelected={src === value}
          key={index}
          onClick={onChange}
          src={src}
        />
      ))}
    </div>
  </div>
);

export default (props: Object) => (
  <Field {...props} withoutLabel>
    <BackgroundImage />
  </Field>
);
