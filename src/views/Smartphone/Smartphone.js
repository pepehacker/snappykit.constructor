import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import Sidebar from 'components/Sidebar';

// Containers
import Form from './containers/Form';

// Ducks
import { SMARTPHONE_FORM_ID } from './ducks/constants';

// Entities
import { updateWebsiteSection } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

// Template
import { SMARTPHONE, SMARTPHONE_MOCKUP } from 'template/config';

const Smarthpone = ({ id, initialValues, handleChange }) => (
  <Sidebar title="Smartphone">
    <Form
      form={`${SMARTPHONE_FORM_ID}-${id}`}
      initialValues={initialValues}
      onChange={handleChange}
    />
  </Sidebar>
);

const mapStateToProps = (state: Object, { location }) => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?'
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');

  const mockupId = get(
    getSectionById(state, websiteId, id || SMARTPHONE),
    'mockup'
  );

  const { model, style } = SMARTPHONE_MOCKUP[mockupId] || {};

  return {
    id,
    initialValues: {
      mockup: mockupId,
      model,
      style
    },
    websiteId
  };
};

export default compose(
  connect(mapStateToProps, { updateWebsiteSection }),
  withHandlers({
    handleChange: ({ id, updateWebsiteSection, websiteId }): func => (
      { mockup },
      dispatch,
      props,
      prevValue
    ): void =>
      mockup !== get(prevValue, 'mockup') &&
      updateWebsiteSection(websiteId, id || SMARTPHONE, { mockup })
  })
)(Smarthpone);
