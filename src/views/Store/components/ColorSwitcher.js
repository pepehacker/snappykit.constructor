import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';
import { StoreButton } from 'components/Template';

// Entities
import { STORE, STORE_BACKGROUND, STORE_COLOR } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './ColorSwitcher.scss';

const StoreColorSwitcher = ({
  background,
  color,
  handleClick,
}) => {
  const backgroundClassNames = classNames(styles.Trigger, styles.TriggerBackground);
  const textClassNames = classNames(styles.Trigger, styles.TriggerText);

  return (
    <div>
      <div className={styles.Example}>
        <button
          className={backgroundClassNames}
          onClick={() => handleClick(STORE_BACKGROUND)}
          style={{ background }}
          type="button"
        />

        <StoreButton variant={StoreButton.VARIANT.GOOGLE_PLAY} />

        <button
          className={textClassNames}
          onClick={() => handleClick(STORE_COLOR)}
          style={{ background: color }}
          type="button"
        />
      </div>
    </div>
  );
};

StoreColorSwitcher.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, STORE);

const ComposedStoreColorSwitcher = compose(
  connect(mapStateToProps),
  withHandlers({
    handleClick: ({ onChange }) => (value: string) =>
      onChange && onChange(value),
  }),
)(StoreColorSwitcher)

export default (props: Object) => (
  <Field {...props}>
    <ComposedStoreColorSwitcher />
  </Field>
);
