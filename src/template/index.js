import { get } from 'lodash';
import { createContext } from 'react';

// Templates
import * as Template1 from './templates/Template1';
import * as Template2 from './templates/Template2';

export const TEMPLATES = [Template1, Template2].map(({ config, ...props }) => ({
  ...props,
  config,
  id: get(config, 'id'),
}));

export const getFirstTemplate = (): Object => TEMPLATES[0];

export const getTemplateById = (id: number): Object =>
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

// Utils
export { default as convertTemplateData } from './utils/convertTemplateData';
export { default as createTemplateData } from './utils/createTemplateData';
export { default as getTemplateExportData } from './utils/getTemplateExportData';
