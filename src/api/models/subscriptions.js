// Config
import CONFIG from 'api/config';

export default {
  get: {
    method: CONFIG.METHOD.GET,
    url: `${CONFIG.URL}/plan/plan_list/`,
  },
  fetchPrice: {
    method: CONFIG.METHOD.GET,
    url: ({ productId }) =>
      `https://checkout.paddle.com/api/2.0/prices?product_ids=${productId}&customer_country=US`,
  },
};
