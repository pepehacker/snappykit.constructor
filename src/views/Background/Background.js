import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import Sidebar from 'components/Sidebar';

// Containers
import ImageForm from './containers/ImageForm';

// Data
import TABS from './data/tabs';

// Entities
import { BACKGROUND } from 'template';
import { updateWebsiteSection } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

const Background = ({
  // Props
  id,
  initialValues,

  // Handlers
  handleChange,
}) => (
  <Sidebar tabs={TABS} title="Background">
    <ImageForm onChange={handleChange} />
  </Sidebar>
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
