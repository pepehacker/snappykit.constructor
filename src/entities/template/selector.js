import { get } from 'lodash';

export const getFieldById = (state: Object, id: string) =>
  get(state, `template.${id}`);
