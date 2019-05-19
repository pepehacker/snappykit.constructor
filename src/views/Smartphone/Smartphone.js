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
import { SMARTPHONE } from 'template/config';

const Smarthpone = ({ initialValues, handleChange }) => (
  <Sidebar title="Smartphone">
    <Form initialValues={initialValues} onChange={handleChange} />
  </Sidebar>
);

const mapStateToProps = (state: Object, { location }) => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');

  return {
    id,
    initialValues: getSectionById(state, websiteId, id || SMARTPHONE),
    websiteId,
  };
};

export default compose(
  connect(
    mapStateToProps,
    { updateWebsiteSection },
  ),
  withHandlers({
    handleChange: ({ id, updateWebsiteSection, websiteId }): func => (
      values,
      dispatch,
      props,
      prevValue,
    ): void =>
      get(values, 'mockup') !== get(prevValue, 'mockup') &&
      updateWebsiteSection(websiteId, id || SMARTPHONE, values),
  }),
)(Smarthpone);
