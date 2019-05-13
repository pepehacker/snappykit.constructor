// @flow
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import Sidebar from 'components/Sidebar';

// Containers
import ColorForm from './containers/ColorForm';
import GradientForm from './containers/GradientForm';
import ImageForm from './containers/ImageForm';

// Data
import TABS from './data/tabs';

// Entities
import { BACKGROUND } from 'template';
import { updateWebsiteSection } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

// Type
import type { BackgroundType } from './Background.type';

const Background = ({
  // Props
  id,
  initialValues,

  // Handlers
  handleColorChange,
  handleGradientChange,
  handleImageChange,
}: BackgroundType): React.Element<typeof Sideber> => (
  <Sidebar tabs={TABS} title="Background">
    <ImageForm initialValues={initialValues} onChange={handleImageChange} />
    <ColorForm initialValues={initialValues} onChange={handleColorChange} />
    <GradientForm initialValues={initialValues} onChange={handleGradientChange} />
  </Sidebar>
);

const mapStateToProps = (state: Object, { location }) => {
  const match: Object = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id: string = get(match, 'params.id');
  const websiteId: string = get(match, 'params.websiteId');
  const initialValues: Object = getSectionById(state, websiteId, id || BACKGROUND);

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
    handleColorChange: ({ id, updateWebsiteSection, websiteId }): Function => ({ color }) =>
      updateWebsiteSection(websiteId, id || BACKGROUND, {
        color,
        gradient: undefined,
        image: undefined,
      }),
    handleGradientChange: ({ id, updateWebsiteSection, websiteId }): Function => ({ gradient }) =>
      updateWebsiteSection(websiteId, id || BACKGROUND, {
        gradient,
        color: undefined,
        image: undefined,
      }),
    handleImageChange: ({ id, updateWebsiteSection, websiteId }): Function => (
      { image },
      dispatch,
      props,
      previousValues,
    ) =>
      updateWebsiteSection(websiteId, id || BACKGROUND, {
        color: undefined,
        gradient: undefined,
        image,
      }),
  }),
)(Background);
