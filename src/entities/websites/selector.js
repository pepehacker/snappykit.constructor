import { get, values } from 'lodash';

export const getSectionById = (state: Object, websiteId: number|string, sectionId: string): Object =>
  get(state, `entities.websites.${websiteId}.data.${sectionId}`);

export const getWebsiteCount = (state: Object): number =>
  getWebsiteList(state).length;

export const getWebsiteById = (state: Object, id: number|string): Array<Object> =>
  get(state, `entities.websites.${id}`);

export const getWebsiteList = (state: Object): Array<Object> =>
  values(get(state, 'entities.websites', {}));

export const hasWebsite = (state: Object, id: number|string): bool =>
  !!get(state, `entities.websites.${id}`);

export const isEditable = (state: Object, id: number|string): bool =>
  hasWebsite(state, id) && isSupported(state, id);

export const isSupported = (state: Object, id: number|string): bool =>
  get(state, `entities.websites.${id}.isSupported`);
