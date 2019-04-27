// @flow
import React from 'react';

// Components
import { Field } from 'components/Form';
import Card from './components/Card';

// Entities
import { BACKGROUND_LIST } from 'template/config';

// Styles
import styles from './Image.scss';

type BackgroundImageType = {
  onChange: (event: Object) => Function,
  onEdit: (variant: string) => Function,
  photos: Array<string>,
  value: any,
};

const BackgroundImage = ({
  editType,
  onChange,
  onEdit,
  photos = [],
  value,
}: BackgroundImageType): React.Element<'div'> => (
  <div className={styles.Root}>
    <div className={styles.List}>
      {(photos || BACKGROUND_LIST).map(
        (src: string): func => (
          <Card
            key={src}
            editType={editType}
            isSelected={src === value}
            onClick={onChange}
            onEdit={onEdit}
            src={src}
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
