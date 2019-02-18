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
import { updateWebsite } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

// Styles
import styles from './Text.scss';

const Text = ({
  id,
  initialValues,
  handleChange,
  withText,
}) => (
  <div className={styles.Root}>
    <Title title="Text" />

    <Container>
      <Form
        form={id}
        initialValues={initialValues}
        key={id}
        onChange={handleChange}
        withText={withText}
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
  const initialValues = getSectionById(state, websiteId, id);

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
        updateWebsite(websiteId, id, value),
  }),
)(Text);
