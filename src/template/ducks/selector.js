import { get } from 'lodash';

export const getSectionById = (data: Object, sectionId: number|string): Object =>
  get(data, `section.${sectionId}`, {});
