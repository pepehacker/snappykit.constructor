import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import Sidebar from 'components/Sidebar';

// Containers
import Form from './containers/Form';

// Entities
import { setTemplateId } from 'entities/websites/actions';
import { getWebsiteById } from 'entities/websites/selector';

const Templates = ({
  // Props
  initialValues,
  // Handlers
  handleChange
}) => (
  <Sidebar title="Templates">
    <Form initialValues={initialValues} onChange={handleChange} />
  </Sidebar>
);

const mapStateToProps = (state: Object, { location }) => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/templates'
  });

  const websiteId = get(match, 'params.websiteId');
  const website = getWebsiteById(state, websiteId);

  return {
    websiteId,
    initialValues: {
      templateId: get(website, 'templateId')
    }
  };
};

export default compose(
  connect(mapStateToProps, { setTemplateId }),
  withHandlers({
    handleChange: ({ setTemplateId, websiteId }): func => ({
      templateId
    }): void => setTemplateId(websiteId, templateId)
  })
)(Templates);
