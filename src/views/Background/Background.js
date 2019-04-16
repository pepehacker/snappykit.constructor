import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import { Container, Title } from 'views/Editor';

// Containers
import Form from './containers/Form';

// Entities
import { BACKGROUND } from 'template';
import { updateWebsiteSection } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

// Styles
import styles from './Background.scss';

const Background = ({
  // Props
  id,
  initialValues,

  // Handlers
  handleChange,
}) => (
  <div className={styles.Root}>
    <Title title="Background" />

    <Container>
      <Form
        key={id} form={id}
        initialValues={initialValues} onChange={handleChange}
      />
    </Container>
  </div>
);

const mapStateToProps = (state: Object, { location }) => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');
  const initialValues = getSectionById(state, websiteId, id || BACKGROUND);

  return {
    id,
    initialValues,
    websiteId,
    withText: id && get(initialValues, 'text') !== undefined,
  };
};

export default compose(
  connect(
    mapStateToProps,
    { updateWebsiteSection },
  ),
  withHandlers({
    handleChange: ({ id, updateWebsiteSection, websiteId }): func => (
      value: Object,
      dispatch: func,
      { change, ...props },
      prevValue: Object,
    ): void => {
      updateWebsiteSection(websiteId, id || BACKGROUND, value);

      // @todo - temporary shit
      if (get(value, 'image') !== get(prevValue, 'image')) {
        dispatch(change('color', 'rgba(255, 255, 255, 0)'));
        dispatch(
          change('gradient', {
            angle: 0,
            from: 'rgba(255, 255, 255, 0)',
            to: 'rgba(255, 255, 255, 0)',
          }),
        );
      }
    },
  }),
)(Background);
