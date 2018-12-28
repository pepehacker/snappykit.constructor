// Config
import CONFIG from 'api/config';

export default {
  get: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/plan/plan_list/`,
  },
}
