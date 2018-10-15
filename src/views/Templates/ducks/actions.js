import {
  SET_CURRENT_TEMPLATE,
} from './types';

export const setCurrentTemplate = (templateId: string): Object =>
  ({ type: SET_CURRENT_TEMPLATE, templateId });
