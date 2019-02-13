import axios from 'axios';
import { get } from 'lodash';

import models from './models';

const API = (method: Array<Object>|string, params: Object) => {
  const batch = []
    .concat(typeof method === 'string'
      ? { method, params }
      : method
    ).map(({ method, params }) => {
      const model = get(models, method);
      const url = get(model, 'url', '/');

      return model
        ? axios[get(model, 'method', 'get')](typeof url === 'function' ? url(params) : url, params)
        : new Promise((resolve: func, reject: func) => reject(new Error('Undefined method!')));
    });

  return batch.length > 1
    ? axios.all(batch)
    : batch[0];
};

export default API;
