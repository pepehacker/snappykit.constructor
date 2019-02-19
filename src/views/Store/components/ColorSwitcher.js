import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import { Field } from 'components/Form';

// Template
import { StoreButton } from 'template';

// Entities
import {
  STORE,
  STORE_APP_STORE,
  STORE_BACKGROUND,
  STORE_COLOR,
} from 'entities/template/constants';
import { getSectionById } from 'entities/websites/selector';

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

        <StoreButton variant={STORE_APP_STORE} />

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

const mapStateToProps = (state: Object, { location }): Object => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');

  return {
    ...getSectionById(state, websiteId, id || STORE),
    id, websiteId,
  };
};

const ComposedStoreColorSwitcher = withRouter(compose(
  connect(mapStateToProps),
  withHandlers({
    handleClick: ({ onChange }) => (value: string) =>
      onChange && onChange(value),
  }),
)(StoreColorSwitcher));

export default (props: Object) => (
  <Field {...props}>
    <ComposedStoreColorSwitcher />
  </Field>
);
