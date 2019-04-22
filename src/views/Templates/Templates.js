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
import { setTemplateId } from 'entities/websites/actions';
import { getWebsiteById } from 'entities/websites/selector';

// Styles
import styles from './Templates.scss';

const Templates = ({
  // Props
  initialValues,
  // Handlers
  handleChange,
}) => (
  <div className={styles.Root}>
    <Title title="Templates" />

    <Container>
      <Form initialValues={initialValues} onChange={handleChange} />
    </Container>
  </div>
);

const mapStateToProps = (state: Object, { location }) => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/templates',
  });

  const websiteId = get(match, 'params.websiteId');
  const website = getWebsiteById(state, websiteId);

  return {
    websiteId,
    initialValues: {
      templateId: get(website, 'templateId'),
    },
  };
};

export default compose(
  connect(
    mapStateToProps,
    { setTemplateId },
  ),
  withHandlers({
    handleChange: ({ setTemplateId, websiteId }): func => ({ templateId }): void =>
      setTemplateId(websiteId, templateId),
  }),
)(Templates);
