import React from 'react';

// Components
import { Field } from 'components/Form';

import styles from './Field.scss';

const IconField = ({
  name,
  title = 'Instagram',
  value,
}) => (
  <div className={styles.Root}>
    <div className={styles.Preview}>
      <label
        className={styles.Label}
        htmlFor={name}
      >
        <img
          alt={title}
          className={styles.Icon}
          src="https://www.windowscentral.com/sites/wpcentral.com/files/topic_images/2016/new-instagram-icon-topic.png"
        />

        <div className={styles.Refresh} />

        <input
          className={styles.Input}
          id={name}
          name={name}
          type="file"
        />
      </label>
    </div>

    <div className={styles.Title}>
      {title}
    </div>
  </div>
);

export default props => (
  <Field {...props}>
    <IconField />
  </Field>
);

