import { get, values } from 'lodash';

export const getWebsiteCount = (state: Object): number =>
  getWebsiteList(state).length;

export const getWebsiteById = (state: Object, id: number): Array<Object> =>
  get(state, `entities.websites.${id}`);

export const getWebsiteList = (state: Object): Array<Object> =>
  values(get(state, 'entities.websites', {}));
