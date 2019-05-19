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

// Template
import { SCREENSHOTS } from 'template';

const Screenshots = ({ handleChange, id, initialValues }) => (
  <Sidebar info="750x1334" title="Screenshots">
    <Form
      key={id} form={id}
      initialValues={initialValues} onChange={handleChange}
    />
  </Sidebar>
);

const mapStateToProps = (state: Object, { location }): Object => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');
  const initialValues = getSectionById(state, websiteId, id || SCREENSHOTS);

  return { id, initialValues, websiteId };
};

export default compose(
  connect(
    mapStateToProps,
    { updateWebsiteSection },
  ),
  withHandlers({
    handleChange: ({ id, updateWebsiteSection, websiteId }): func => (value: Object): void =>
      updateWebsiteSection(websiteId, id || SCREENSHOTS, value),
  }),
)(Screenshots);
