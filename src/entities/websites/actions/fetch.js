import { get, isEmpty } from 'lodash';
import { normalize } from 'normalizr';

// Entities
import { UPDATE_ENTITIES } from 'entities/types';

// Templates
import { convertTemplateData, getTemplateById } from 'template';

// Types
import {
  // Fetch list
  FETCH_WEBSITES_REQUEST,
  FETCH_WEBSITES_SUCCESS,
  FETCH_WEBSITES_FAILURE,
} from '../types';

export default (): Function => (
  dispatch: Function,
  getState: Function,
  { api, schema },
): Object<Promise> => {
  dispatch({ type: FETCH_WEBSITES_REQUEST });

  return api(['websites.getAppList', 'websites.getTemplateList'])
    .then(
      (res: Object): void => {
        const appList: Array<Object> = get(res, '0.data.results', []);
        const templateList: Array<Object> = get(res, '1.data.results', []);

        const results: Array<Object> = templateList.map((item: Object) => {
          const app: Object = appList.filter(({ id }) => id === get(item, 'app_id'))[0];
          const template: Object = getTemplateById(get(item, 'template_id'));

          let data: Object = {};

          if (template) {
            try {
              const json = JSON.parse(get(item, 'json', ''));
              data = convertTemplateData(json, template.config);
            } catch (e) {
              // eslint-disable-next-line
              console.error(`The template (${get(item, 'id')}) is not supported!`);
            }
          }

          return {
            data,
            appId: get(app, 'id'),
            description: get(item, 'description', ''),
            domain: get(app, 'domain'),
            id: get(item, 'id'),
            isSupported: !isEmpty(data),
            provider: get(app, 'provider', 1),
            storeId: get(app, 'store_id'),
            templateId: get(item, 'template_id'),
            title: get(item, 'title', 'Untitled'),
          };
        });

        const normalizedData = normalize(results, [schema.website]);

        dispatch({ type: UPDATE_ENTITIES, data: normalizedData });
        dispatch({ type: FETCH_WEBSITES_SUCCESS });
      },
    )
    .catch((error: Object) =>
      dispatch({ type: FETCH_WEBSITES_FAILURE, error: get(error, 'message') }),
    );
};
