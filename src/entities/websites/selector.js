import { get, values } from 'lodash';

// Templates
import { getTemplateById } from 'template';

export const getSectionById = (
  state: Object,
  websiteId: number | string,
  sectionId: string
): Object =>
  get(state, `entities.websites.${websiteId}.data.section.${sectionId}`);

export const getWebsiteCount = (state: Object): number =>
  getWebsiteList(state).filter(({ isDeleted }): boolean => !isDeleted).length;

export const getWebsiteById = (
  state: Object,
  id: number | string
): Array<Object> => get(state, `entities.websites.${id}`);

export const getWebsiteList = (state: Object): Array<Object> =>
  values(get(state, 'entities.websites', {}));

export const getWebsiteLogo = (state: Object, id: number | string): string => {
  const website = getWebsiteById(state, id);
  return get(website, 'data.section.icon.src');
};

export const getWebsiteProvider = (
  state: Object,
  id: number | string
): number => get(getWebsiteById(state, id), 'provider', 1);

export const getWebsiteTemplate = (
  state: Object,
  id: number | string
): Object => {
  const website = getWebsiteById(state, id);
  return getTemplateById(get(website, 'templateId'));
};

export const hasWebsite = (state: Object, id: number | string): boolean =>
  !!get(state, `entities.websites.${id}`);

export const isEditable = (state: Object, id: number | string): boolean =>
  hasWebsite(state, id) && isSupported(state, id);

export const isSupported = (state: Object, id: number | string): boolean =>
  get(state, `entities.websites.${id}.isSupported`);
