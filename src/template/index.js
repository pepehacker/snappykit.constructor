import { get } from 'lodash';
import React, { createContext } from 'react';

// Templates
import * as Template1 from './Template1';

type Template = {
  Component: Object<React>,
  config: Object,
  id: number,
  preview: string,
};

export const TEMPLATES = [Template1]
  .map(({ Component, config, preview }) => ({
    Component, config, preview,
    id: get(config, 'id'),
  }));

export const getTemplateById = (id: number): Object<Template> =>
  TEMPLATES.filter(({ id: templateId }) => templateId === id)[0] || {};

export const TemplateContext = createContext({
  websiteId: 'new',
});

export { default } from './Template';
export * from './ducks';
