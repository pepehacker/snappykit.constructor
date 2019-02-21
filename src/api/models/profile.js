// Config
import CONFIG from 'api/config';

export default {
  get: {
    method: CONFIG.METHOD.GET,
    url: ({ id }) => `${CONFIG.URL}/core/profile/${id}/`,
  },
}
