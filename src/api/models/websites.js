// Config
import CONFIG from 'api/config';

export default {
  create: {
    method: CONFIG.METHOD.POST,
    url: `${CONFIG.URL}/core/app/`,
  },
  createTemplate: {
    method: CONFIG.METHOD.POST,
    url: `${CONFIG.URL}/core/app-template/`,
  },
  delete: {
    method: CONFIG.METHOD.DELETE,
    url: ({ appId }) => `${CONFIG.URL}/core/app/${appId}/`,
  },
  deleteTemplate: {
    method: CONFIG.METHOD.DELETE,
    url: ({ id }) => `${CONFIG.URL}/core/app-template/${id}/`,
  },
  getAppList: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/core/app/`,
  },
  getTemplateList: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/core/app-template/`,
  },
  update: {
    method: CONFIG.METHOD.PATCH,
    url: ({ appId }) => `${CONFIG.URL}/core/app/${appId}/`,
  },
  updateTemplate: {
    method: CONFIG.METHOD.PATCH,
    url: ({ id }) => `${CONFIG.URL}/core/app-template/${id}/`,
  },
}
