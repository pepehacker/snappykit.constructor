import { get, keys, set } from 'lodash';

// Selector
import { getWebsiteById } from '../selector';

// Templates
import { getTemplateById } from 'template';

// Types
import {
  SET_TEMPLATE_ID,

  UPDATE_WEBSITE,
  UPDATE_WEBSITE_SECTION,
} from '../types';

export const setTemplateId = (websiteId: number|string, templateId: number|string): func =>
  (dispatch: func, getState: func) => {
    const state = getState();
    const website = getWebsiteById(state, websiteId);

    if (website) {
      const data = get(website, 'data');
      const { getExportData } = getTemplateById(get(website, 'templateId'));
      const { config } = getTemplateById(templateId);

      if (data && getExportData) {
        const oldData = getExportData(data);
        const newData = {};

        keys(config.section).forEach((sectionId: string): void => {
          const schema = get(config, `section.${sectionId}.schema`);

          if (schema) {
            set(newData, `section.${sectionId}`, schema
              ? schema.cast(get(oldData, `section.${sectionId}`))
              : oldData[sectionId]);
          }
        });

        dispatch({ type: SET_TEMPLATE_ID, templateId, websiteId, payload: { ...oldData, ...newData }});
      }
    }
  };

export const updateWebsite = (websiteId: number|string, payload: Object): Object =>
  ({ type: UPDATE_WEBSITE, websiteId, payload });

export const updateWebsiteSection = (websiteId: number|string, sectionId: string, payload: Object): func =>
  (dispatch: func, getState: func) => {
    const state = getState();
    const website = getWebsiteById(state, websiteId);
    const { config } = getTemplateById(get(website, 'templateId'));
    const schema = get(config, `section.${sectionId}.schema`);

    schema && dispatch({
      type: UPDATE_WEBSITE_SECTION, sectionId, websiteId,
      payload: schema.cast(payload),
    });
  };

export { default as createWebsite } from './create';
export { default as deleteWebsite } from './delete';
export { default as fetchWebsites } from './fetch';
export { default as saveWebsite } from './save';
