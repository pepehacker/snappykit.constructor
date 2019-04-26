import { get } from 'lodash';

// Selector
import { getWebsiteById } from '../selector';

// Templates
import { convertTemplateData, getTemplateExportData, getTemplateById } from 'template';

// Types
import { SET_TEMPLATE_ID, UPDATE_WEBSITE, UPDATE_WEBSITE_SECTION } from '../types';

export const setTemplateId = (websiteId: number | string, templateId: number | string): func => (
  dispatch: func,
  getState: func,
) => {
  const state = getState();
  const website = getWebsiteById(state, websiteId);

  if (website) {
    const { config: oldConfig } = getTemplateById(get(website, 'templateId'));
    const { config } = getTemplateById(templateId);

    if (config && oldConfig) {
      const oldData = getTemplateExportData(get(website, 'data'), oldConfig);

      dispatch({
        templateId,
        websiteId,
        type: SET_TEMPLATE_ID,
        payload: convertTemplateData(oldData, config),
      });
    }
  }
};

export const updateWebsite = (websiteId: number | string, payload: Object): Object => ({
  type: UPDATE_WEBSITE,
  websiteId,
  payload,
});

export const updateWebsiteSection = (
  websiteId: number | string,
  sectionId: string,
  payload: Object,
): func => (dispatch: func, getState: func) => {
  const state = getState();
  const website = getWebsiteById(state, websiteId);
  const { config } = getTemplateById(get(website, 'templateId'));
  const schema = get(config, `section.${sectionId}.schema`);
  console.log(payload);
  schema &&
    dispatch({
      type: UPDATE_WEBSITE_SECTION,
      sectionId,
      websiteId,
      payload: schema.cast(payload),
    });
};

export { default as createWebsite } from './create';
export { default as deleteWebsite } from './delete';
export { default as fetchWebsites } from './fetch';
export { default as saveWebsite } from './save';
