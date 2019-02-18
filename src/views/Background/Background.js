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
import { BACKGROUND } from 'entities/template';
import { updateWebsite } from 'entities/websites/actions';
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
        form={id}
        initialValues={initialValues}
        key={id}
        onChange={handleChange}
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
    id, initialValues, websiteId,
    withText: id && get(initialValues, 'text') !== undefined,
  };
};

export default compose(
  connect(mapStateToProps, { updateWebsite }),
  withHandlers({
    handleChange: ({ id, updateWebsite, websiteId }): func =>
      (value: Object): void =>
        updateWebsite(websiteId, id || BACKGROUND, value),
  }),
)(Background);
