// Config
import CONFIG from 'api/config';

export default {
  delete: {
    method: CONFIG.METHOD.DELETE,
    url: ({ id }) => `${CONFIG.URL}/core/app-template/${id}/`,
  },
  deleteApp: {
    method: CONFIG.METHOD.DELETE,
    url: ({ appId }) => `${CONFIG.URL}/core/app/${appId}/`,
  },
  get: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/core/app-template/`,
  },
}
