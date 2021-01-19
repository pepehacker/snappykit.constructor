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
import { updateWebsiteSection } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

const Text = ({ id, initialValues, handleChange, websiteId, withText }) => (
  <Sidebar title="Text">
    <Form
      key={id}
      form={id}
      initialValues={initialValues}
      onChange={handleChange}
      withText={withText}
    />
  </Sidebar>
);

const mapStateToProps = (state: Object, { location }) => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?'
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');
  const initialValues = getSectionById(state, websiteId, id);

  return {
    id,
    initialValues,
    websiteId,
    withText: id && get(initialValues, 'text') !== undefined
  };
};

export default compose(
  connect(mapStateToProps, { updateWebsiteSection }),
  withHandlers({
    handleChange: ({ id, updateWebsiteSection, websiteId }): func => (
      value: Object
    ): void => updateWebsiteSection(websiteId, id, value)
  })
)(Text);
