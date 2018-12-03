import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import { compose, withHandlers } from 'recompose';

// Actions
import { setScreenshots } from 'views/Screenshots';

// Components
import { Container, Title } from 'views/Editor';
import Screenshot from './components/Item';

import styles from './Screenshots.scss';

const SortContainer = ({
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

const ComposedSortContainer = SortableContainer(SortContainer);

const Screenshots = ({
  handleSort,
  screenshots,
}) => (
  <div className={styles.Root}>
    <Title info="720x1440" title="Screenshots" />

    <Container>
      <ComposedSortContainer
        axis="xy"
        onSortEnd={handleSort}
        screenshots={screenshots}
      />
    </Container>
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
