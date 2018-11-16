import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import { compose, withHandlers } from 'recompose';

// Actions
import { setScreenshots } from 'views/Screenshots';

// Components
import Screenshot from './components/Item';

import styles from './Screenshots.scss';

const Container = ({
  screenshots,
}) => (
  <div className={styles.List}>
    {screenshots.map((screenshot, index) => (
      <Screenshot {...screenshot} key={screenshot.id} index={index} />
    ))}

    <button
      className={styles.Create}
      type="button"
    >
      <div className={styles.Icon} />
    </button>
  </div>
);

const ComposedContainer = SortableContainer(Container);

const Screenshots = ({
  handleSort,
  screenshots,
}) => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      <div className={styles.Title}>
        Screenshots
      </div>

      <div className={styles.Resolution}>
        720x1440
      </div>
    </div>

    <div className={styles.Container}>
      <ComposedContainer axis="xy" screenshots={screenshots} onSortEnd={handleSort} />
    </div>
  </div>
);

const mapStateToProps = ({ views }) => ({
  screenshots: get(views, 'screenshots.items', []),
});

const mapDispatchToProps = dispatch => ({
  setScreenshots: (screenshots: Array) => dispatch(setScreenshots(screenshots)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleSort: ({ screenshots, setScreenshots }) => ({ oldIndex, newIndex }) =>
      setScreenshots(arrayMove(screenshots, oldIndex, newIndex)),
  }),
)(Screenshots);
