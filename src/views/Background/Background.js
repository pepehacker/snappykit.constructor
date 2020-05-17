// @flow
import { get, values } from 'lodash';
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
  currentIndex,
  id,
  initialValues,

  // Handlers
  handleColorChange,
  handleGradientChange,
  handleImageChange
}: BackgroundType): React.Element<typeof Sideber> => (
  <Sidebar currentIndex={currentIndex} tabs={TABS} title="Background">
    <ImageForm
      form={`background_image_form_${id}`}
      id={id}
      initialValues={initialValues}
      onChange={handleImageChange}
    />

    <ColorForm
      form={`background_color_form_${id}`}
      initialValues={initialValues}
      onChange={handleColorChange}
    />

    <GradientForm
      form={`background_gradien_form_${id}`}
      initialValues={initialValues}
      onChange={handleGradientChange}
    />
  </Sidebar>
);

const mapStateToProps = (state: Object, { location }) => {
  const match: Object = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/background/:id?'
  });

  const id: string = get(match, 'params.id');
  const websiteId: string = get(match, 'params.websiteId');
  const initialValues: Object =
    getSectionById(state, websiteId, id || BACKGROUND) || {};

  return {
    id,
    initialValues,
    currentIndex: initialValues.image ? 0 : initialValues.color ? 1 : 2,
    websiteId,
    withText: id && get(initialValues, 'text') !== undefined
  };
};

export default compose(
  connect(mapStateToProps, { updateWebsiteSection }),
  withHandlers({
    handleColorChange: ({ id, updateWebsiteSection, websiteId }): Function => ({
      color
    }) =>
      updateWebsiteSection(websiteId, id || BACKGROUND, {
        color,
        gradient: undefined,
        image: undefined
      }),
    handleGradientChange: ({
      id,
      updateWebsiteSection,
      websiteId
    }): Function => ({ gradient }) => {
      const propSize: number = values(gradient).length;

      updateWebsiteSection(websiteId, id || BACKGROUND, {
        gradient:
          propSize < 3
            ? {
                angel: gradient.angel || 0,
                from: gradient.from || 'rgba(255, 255, 255, 0)',
                to: gradient.to || 'rgba(255, 255, 255, 0)'
              }
            : gradient,
        color: undefined,
        image: undefined
      });
    },
    handleImageChange: ({ id, updateWebsiteSection, websiteId }): Function => (
      { image },
      dispatch,
      props,
      previousValues
    ) =>
      image &&
      updateWebsiteSection(websiteId, id || BACKGROUND, {
        color: undefined,
        gradient: undefined,
        image
      })
  })
)(Background);
