import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Actions
import { setView } from 'views/Editor';

// Entities
import { VIEW } from 'entities/template/constants';

import styles from './Item.scss';

const EditorDevicesItem = ({
  className: classNameProp,
  handleClick,
  id,
  isActive,
  title,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootIsActive]: !!isActive,

    [styles.RootIconDesktop]: id === VIEW.DESKTOP,
    [styles.RootIconMobile]: id === VIEW.MOBILE,
    [styles.RootIconTablet]: id === VIEW.TABLET,
  });

  return (
    <button
      className={className}
      onClick={handleClick}
      type="button"
    >
      <div className={styles.Cover}>
        <div className={styles.Icon} />
      </div>

      <div className={styles.Title}>
        {title}
      </div>
    </button>
  );
};

EditorDevicesItem.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  title: PropTypes.string,
};

const mapStateToProps = ({ views }, { id }) => ({
  isActive: get(views, 'editor.view') === id,
  isBusied: get(views, 'editor.isBusied'),
});

const mapDispatchToProps = (dispatch) => ({
  setView: (id: string): void => dispatch(setView(id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleClick: ({ id, isBusied, setView }): func => (): void =>
      !!id && setView(id),
  }),
)(EditorDevicesItem);
