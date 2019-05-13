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
}: BackgroundImageType): React.Element<'div'> => {
  const cardProps = {
    editType,
    onEdit,
    onClick: onChange,
  };

  return (
    <div className={styles.Root}>
      <div className={styles.List}>
        {photos && photos.length > 0
          ? photos.map(({ id, photo, src, user }) => (
            <Card
              {...cardProps}
              key={id}
              editType={editType}
              isSelected={src === value}
              photo={photo}
              src={src}
              user={user}
              value={src}
            />
          ))
          : BACKGROUND_LIST.map((src: string) => (
            <Card
              {...cardProps}
              key={src}
              editType={editType}
              isSelected={src === value}
              src={src}
              value={src}
            />
          ))}
      </div>
    </div>
  );
};

export default (props: Object) => (
  <Field {...props} withoutLabel>
    <BackgroundImage />
  </Field>
);
