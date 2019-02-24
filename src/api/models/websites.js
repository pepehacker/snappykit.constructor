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
    url: ({ websiteId }) => `${CONFIG.URL}/core/app-template/${websiteId}/`,
  },
  get: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/core/app-template/`,
  },
  update: {
    method: CONFIG.METHOD.POST,
    url: ({ id }) => `${CONFIG.URL}/core/app/${id}/`,
  },
  updateTemplate: {
    method: CONFIG.METHOD.POST,
    url: ({ id }) => `${CONFIG.URL}/core/app-template/${id}/`,
  },
}
