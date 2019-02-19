import { get } from 'lodash';
import React, { createContext } from 'react';

// Templates
import * as Template1 from './templates/Template1';
import * as Template2 from './templates/Template2';

type Template = {
  Component: Object<React>,
  config: Object,
  id: number,
  preview: string,
};

export const TEMPLATES = [Template1, Template2]
  .map(({ Component, config, getExportData, preview }) => ({
    Component, config, getExportData, preview,
    id: get(config, 'id'),
  }));

export const getTemplateById = (id: number): Object<Template> =>
  TEMPLATES.filter(({ id: templateId }) => templateId === id)[0] || {};

export const TemplateContext = createContext({
  websiteId: 'new',
});

export { default } from './Template';

// Components
export { default as Background } from './components/Background';
export { default as Icon } from './components/Icon';
export { default as Link } from './components/Link';
export { default as Policy } from './components/Policy';
export { default as Screenshots } from './components/Screenshots';
export { default as Smartphone } from './components/Smartphone';
export { default as Social } from './components/Social';
export { default as Store, StoreButton } from './components/Store';
export { default as Text } from './components/Text';

// Ducks
export * from './ducks';
