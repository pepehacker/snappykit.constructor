import axios from 'axios';
import { get } from 'lodash';

import models from './models';

const API = (method: Array<Object>|string, params: Object, { token } = {}) => {
  const batch = []
    .concat(typeof method === 'string'
      ? { method, params }
      : method
    ).map(({ method, params }) => {
      const model = get(models, method);
      const url = get(model, 'url', '/');

      return model
        ? axios({
            data: params,
            headers: {
              'Authorization': `JWT ${token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbnlhMDk1QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidmFueWEwOTVAZ21haWwuY29tIiwiZXhwIjoxNTQ1OTAxODAwLCJ1c2VyX2lkIjoyMDM2fQ.-XtWK2DieKLWTWJNjazh5_sFlnk_n5KmkL9tvDar3Ms'}`,
            },
            method: get(model, 'method', 'get'),
            url: typeof url === 'function' ? url(params) : url,
          })
        : new Promise((resolve: func, reject: func) => reject(new Error('Undefined method!')));
    });

  return batch.length > 1
    ? axios.all(batch)
    : batch[0];
};

export default API;
