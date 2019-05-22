// Config
import CONFIG from 'api/config';

export default {
  create: {
    method: CONFIG.METHOD.POST,
    url: `${CONFIG.URL}/core/app/`,
  },
  delete: {
    method: CONFIG.METHOD.DELETE,
    url: ({ appId }) => `${CONFIG.URL}/core/app/${appId}/`,
  },
  getAppList: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/core/app/`,
  },
  update: {
    method: CONFIG.METHOD.PATCH,
    url: ({ appId }) => `${CONFIG.URL}/core/app/${appId}/`,
  },
};
