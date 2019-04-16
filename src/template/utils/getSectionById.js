import { get } from 'lodash';

export default (data: Object, sectionId: number | string): Object =>
  get(data, `section.${sectionId}`, {});
