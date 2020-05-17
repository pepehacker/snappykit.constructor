// Config
import CONFIG from 'api/config';

export default {
  getPlayData: {
    method: CONFIG.METHOD.GET,
    url: ({ country, id }) =>
      `${CONFIG.URL}/store/play/by_link_get/?id=${id}&country=${country}&lang=${country}`
  },
  search: {
    method: CONFIG.METHOD.GET,
    url: ({ country, name, store }) =>
      `${CONFIG.URL}/store/${store}/?term=${name}&country=${country}&media=software`
  }
};
