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

  return api('websites.getAppList')
    .then(
      ({ data }): void => {
        const appList: Array<Object> = get(data, 'results', []);

        const results: Array<Object> = appList.map((item: Object) => {
          let data: Object = {};
          let templateId = 1;

          try {
            const json = JSON.parse(get(item, 'json', ''));
            const template = getTemplateById(get(json, 'templateId', 1));

            data = convertTemplateData(json, template.config);
            templateId = get(json, 'templateId', 1);
          } catch (e) {
            // eslint-disable-next-line
            console.error(`The template (${get(item, 'id')}) is not supported!`);
          }

          return {
            data,
            templateId,
            description: get(item, 'description', ''),
            domain: get(item, 'domain'),
            id: get(item, 'id'),
            isSupported: !isEmpty(data),
            provider: get(item, 'provider', 1),
            storeId: get(item, 'store_id'),
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
