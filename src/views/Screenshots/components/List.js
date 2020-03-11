import React from 'react';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import { compose, withHandlers, withState } from 'recompose';

// Components
import { Field } from 'components/Form';

import Create from './Create';
import Item from './Item';

// Styles
import styles from './List.scss';

const ScreenshotList = ({ handleCreate, handleDelete, value, ...props }) => (
  <div className={styles.Root}>
    <Create onCreate={handleCreate} />
    {(value || []).map((image: string, index: number) => (
      <Item key={index} index={index} onDelete={handleDelete} value={image} />
    ))}
  </div>
);

const ComposedScreenshotList = compose(
  withState('axis', 'setAxis', 'xy'),
  withHandlers({
    handleCreate: ({ onChange, value }) => (itemValue: string) =>
      onChange && onChange([itemValue, ...value]),
    handleDelete: ({ onChange, value }) => (itemValue: string) =>
      onChange &&
      onChange(value.filter((image: string) => image !== itemValue)),
    onSortEnd: ({ onChange, value }) => ({ oldIndex = 0, newIndex = 0 }) =>
      onChange && onChange(arrayMove(value, oldIndex, newIndex)),
  }),
)(SortableContainer(ScreenshotList));

export default (props: Object) => (
  <Field {...props}>
    <ComposedScreenshotList />
  </Field>
);
