import { get, isEmpty, keys, set } from 'lodash';
import { normalize } from 'normalizr';

// Entities
import { UPDATE_ENTITIES } from 'entities/types';

// Templates
import { getTemplateById } from 'templates';

// Types
import {
  FETCH_WEBSITES_REQUEST,
  FETCH_WEBSITES_SUCCESS,
  FETCH_WEBSITES_FAILURE,
} from './types';

export const fetchWebsites = (): func => (dispatch: func, getState: func, { api, schema }): Object<Promise> => {
  dispatch({ type: FETCH_WEBSITES_REQUEST });

  return api('websites.get')
    .then(({ data }): void => {
      const results = get(data, 'results', []).map((result: Object) => {
        const template = getTemplateById(get(result, 'template_id'));

        if (template) {
          // disable-eslint-next-line
          const data = {};
          const { section } = get(template, 'config');

          let json = null;

          try {
            json = JSON.parse(get(result, 'json', ''));

            keys(section).forEach((sectionId: string): void => {
              const schema = get(section, `${sectionId}.schema`);

              if (schema) {
                set(data, `section.${sectionId}`, schema.cast(get(json, sectionId)));
              }
            });
          } catch(e) {
            console.error('This JSON schema is not supported!');
          }

          return {
            data,
            description: get(result, 'description'),
            id: get(result, 'id'),
            isSupported: !isEmpty(data),
            logo: isEmpty(data) && get(json, 'logo'),
            templateId: get(result, 'template_id'),
            title: get(result, 'title'),
          };
        }

        return false;
      });

      const normalizedData = normalize(results, [schema.website])

      dispatch({ type: UPDATE_ENTITIES, data: normalizedData });
      dispatch({ type: FETCH_WEBSITES_SUCCESS });
    })
    .catch((error: Object) =>
      dispatch({ type: FETCH_WEBSITES_FAILURE, error: get(error, 'message')}));
};
