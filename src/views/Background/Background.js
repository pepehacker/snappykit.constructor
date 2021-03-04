// @flow
import { get, values } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import { change } from 'redux-form';

// Components
import Sidebar from 'components/Sidebar';

// Containers
import ColorForm from './containers/ColorForm';
import GradientForm from './containers/GradientForm';
import ImageForm from './containers/ImageForm';

// Data
import TABS from './data/tabs';

// Entities
import { BACKGROUND, BACKGROUND_MODE } from 'template';
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
  handleChangeTab,
  handleGradientChange,
  handleImageChange
}: BackgroundType): React.Element<typeof Sideber> => (
  <Sidebar
    currentIndex={currentIndex}
    onChange={handleChangeTab}
    tabs={TABS}
    title="Background"
  >
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
    initialValues: {
      color: '#D2CCFF',
      gradient: {
        angel: 45,
        from: '#FFD6D6',
        to: '#D4D4FF'
      },
      ...initialValues
    },
    currentIndex:
      initialValues.mode === BACKGROUND_MODE.IMAGE
        ? 0
        : initialValues.mode === BACKGROUND_MODE.COLOR
        ? 1
        : 2,
    websiteId,
    withText: id && get(initialValues, 'text') !== undefined
  };
};

export default compose(
  connect(mapStateToProps, { change, updateWebsiteSection }),
  withHandlers({
    handleColorChange: ({
      id,
      initialValues,
      updateWebsiteSection,
      websiteId
    }): Function => ({ color }) =>
      updateWebsiteSection(websiteId, id || BACKGROUND, {
        ...initialValues,
        color,
        mode: BACKGROUND_MODE.COLOR
      }),
    handleGradientChange: ({
      id,
      initialValues,
      updateWebsiteSection,
      websiteId
    }): Function => ({ gradient }) => {
      const propSize: number = values(gradient).length;

      updateWebsiteSection(websiteId, id || BACKGROUND, {
        ...initialValues,
        gradient:
          propSize < 3
            ? {
                angel: gradient.angel || 0,
                from: gradient.from || 'rgba(255, 255, 255, 0)',
                to: gradient.to || 'rgba(255, 255, 255, 0)'
              }
            : gradient,
        mode: BACKGROUND_MODE.GRADIENT
      });
    },
    handleImageChange: ({
      id,
      initialValues,
      updateWebsiteSection,
      websiteId
    }): Function => ({ image }, dispatch, props, previousValues) =>
      image &&
      updateWebsiteSection(websiteId, id || BACKGROUND, {
        ...initialValues,
        image,
        mode: BACKGROUND_MODE.IMAGE
      })
  }),
  withHandlers({
    handleChangeTab: ({
      change,
      handleColorChange,
      handleGradientChange,
      handleImageChange,
      id,
      initialValues
    }) => (index: number) => {
      switch (index) {
        case 1:
          change(`background_color_form_${id}`, 'color', initialValues.color);
          break;
        case 2:
          change(
            `background_gradien_form_${id}`,
            'gradient',
            initialValues.gradient
          );
          break;
        case 0:
        default:
          change(`background_image_form_${id}`, 'image', initialValues.image);
          break;
      }
    }
  })
)(Background);
