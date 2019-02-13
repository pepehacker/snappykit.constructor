import { get } from 'lodash';

// Config
import CONFIG from 'api/config';

export default {
  get: {
    method: CONFIG.METHOD.GET,
    url: ({ country, name, store }) =>
      `${CONFIG.URL}/store/${store}/?term=${name}&country=${get(country, 'value').toUpperCase()}&media=software`,
  },
}
