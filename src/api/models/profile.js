// Config
import CONFIG from 'api/config';

export default {
  get: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/core/profile/1/`
  }
};
