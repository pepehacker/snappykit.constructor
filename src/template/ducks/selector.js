import { get } from 'lodash';

export const getSectionById = (data: Object, id: number|string): Object =>
  get(data, id, {});
