import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import { Container, Title } from 'views/Editor';
import Form from './components/Form';

// Entities
import { ICON } from 'entities/template/constants';
import { updateWebsite } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

// Styles
import styles from './Icon.scss';

const Icon = ({
  handleChange,
  id,
  initialValues,
}) => (
  <div className={styles.Root}>
    <Title title="Icon" />

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

const mapStateToProps = (state: Object, { location }): Object => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');
  const initialValues = getSectionById(state, websiteId, id || ICON);

  return { id, initialValues, websiteId };
};

export default compose(
  connect(mapStateToProps, { updateWebsite }),
  withHandlers({
    handleChange: ({ id, updateWebsite, websiteId }): func =>
      (value: Object): void =>
        updateWebsite(websiteId, id || ICON, value),
  }),
)(Icon);
