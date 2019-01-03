import { get } from 'lodash';

export const getFieldById = (state: Object, id: string): Object =>
  get(state, `entities.template.data.${id}`);

export const getCurrentTemplate = (state: Object): Object =>
  get(state, `entities.template`);

export const getCurrentTemplateId = (state: Object): number =>
  get(state, `entities.template.id`);
