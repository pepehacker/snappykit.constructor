import React from 'react';

// Components
import { Field } from 'components/Form';
import Card from './components/Card';

// Entities
import { BACKGROUND_LIST } from 'template/config';

// Styles
import styles from './Image.scss';

const BackgroundImage = ({ onChange, photos = [], value }) => (
  <div className={styles.Root}>
    <div className={styles.List}>
      {(photos || BACKGROUND_LIST).map(
        (src: string): func => (
          <Card
            key={src} isSelected={src === value}
            onClick={onChange} src={src}
            value={src}
          />
        ),
      )}
    </div>
  </div>
);

export default (props: Object) => (
  <Field {...props} withoutLabel>
    <BackgroundImage />
  </Field>
);
