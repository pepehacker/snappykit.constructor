import classNames from 'classnames';
import React from 'react';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';

// Ducks
import { STORE_APPLE_ID, STORE_GOOGLE_ID } from '../ducks/constants';

// Styles
import styles from './Store.scss';

const SearchStore = ({ handleClick, value }) => {
  const appleClassNames = classNames(styles.Store, styles.StoreVariantApple, {
    [styles.StoreIsActive]: value === STORE_APPLE_ID
  });

  const googleClassNames = classNames(styles.Store, styles.StoreVariantGoogle, {
    [styles.StoreIsActive]: value === STORE_GOOGLE_ID
  });

  return (
    <div className={styles.Root}>
      <div
        className={appleClassNames}
        onClick={() => handleClick(STORE_APPLE_ID)}
        role="button"
        tabIndex={0}
      >
        <div className={styles.Icon} />
        App Store
      </div>

      <div
        className={googleClassNames}
        onClick={() => handleClick(STORE_GOOGLE_ID)}
        role="button"
        tabIndex={0}
      >
        <div className={styles.Icon} />
        Google Play
      </div>
    </div>
  );
};

const ComposedSearchStore = compose(
  withHandlers({
    handleClick: ({ onChange }): func => (store: string): void =>
      onChange && onChange(store)
  })
)(SearchStore);

export default (props: Object) => (
  <Field {...props}>
    <ComposedSearchStore />
  </Field>
);
