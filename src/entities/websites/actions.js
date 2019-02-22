import { get, isEmpty, keys, set } from 'lodash';
import { normalize } from 'normalizr';

// Entities
import { UPDATE_ENTITIES } from 'entities/types';

// Selector
import { getWebsiteById } from './selector';

// Services
import { closeModal } from 'services/modals';

// Templates
import {
  createTemplateData,
  getFirstTemplate,
  getTemplateById,
} from 'template';

// Views
import { CONFIRM_MODAL_ID } from 'views/Websites/ducks';

// Types
import {
  CREATE_WEBSITE,

  // Delete
  DELETE_WEBSITE_REQUEST,
  DELETE_WEBSITE_SUCCESS,
  DELETE_WEBSITE_FAILURE,

  // Fetch list
  FETCH_WEBSITES_REQUEST,
  FETCH_WEBSITES_SUCCESS,
  FETCH_WEBSITES_FAILURE,

  SET_TEMPLATE_ID,

  UPDATE_WEBSITE,
  UPDATE_WEBSITE_SECTION,
} from './types';

export const createWebsite = ({ link, store, ...values }): func =>
  (dispatch: func, getState: func, { api, history }): Object<Promise> => {
    const { config, id: templateId } = getFirstTemplate();
    const { description, logo, title } = values;

    dispatch({
      type: CREATE_WEBSITE,
      payload: {
        description, logo, templateId, title,
        data: createTemplateData({
          ...values,
          store: {
            items: {
              [store]: link,
            },
          },
        }, config),
        isFetching: false,
      },
    });

    history.push('/new/editor/templates');
  };

export const deleteWebsite = ({ appId, id }): func =>
  (dispatch: func, getState: func, { api }): Object<Promise> => {
    dispatch({ type: DELETE_WEBSITE_REQUEST, websiteId: id });
    dispatch(closeModal(CONFIRM_MODAL_ID));

    return id === 'new'
      ? dispatch({ type: DELETE_WEBSITE_SUCCESS, websiteId: id })
      : api([
          { method: 'websites.delete', params: { appId, id }},
          { method: 'websites.deleteApp', params: { appId, id }},
        ])
          .then((data: Object): void =>
            dispatch({ type: DELETE_WEBSITE_SUCCESS, websiteId: id }))
          .catch((error: Object): void =>
            dispatch({ type: DELETE_WEBSITE_FAILURE, error: get(error, 'message')}));
  };

export const fetchWebsites = (): func =>
  (dispatch: func, getState: func, { api, schema }): Object<Promise> => {
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
              // eslint-disable-next-line
              console.error('This JSON schema is not supported!');
            }

            return {
              data,
              appId: get(result, 'app_id'),
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

export const setTemplateId = (websiteId: number|string, templateId: number|string): func =>
  (dispatch: func, getState: func) => {
    const state = getState();
    const website = getWebsiteById(state, websiteId);

    if (website) {
      const data = get(website, 'data');
      const { getExportData } = getTemplateById(get(website, 'templateId'));
      const { config } = getTemplateById(templateId);


      if (data && getExportData) {
        const oldData = getExportData(data);
        const newData = {};

        keys(config.section).forEach((sectionId: string): void => {
          const schema = get(config, `section.${sectionId}.schema`);

          if (schema) {
            set(newData, sectionId, schema
              ? schema.cast(get(oldData, sectionId))
              : oldData[sectionId]);
          }
        });

        dispatch({ type: SET_TEMPLATE_ID, templateId, websiteId, payload: { ...oldData, ...newData }});
      }
    }
  };

export const updateWebsite = (websiteId: number|string, payload: Object): Object =>
  ({ type: UPDATE_WEBSITE, payload });

export const updateWebsiteSection = (websiteId: number|string, sectionId: string, payload: Object): func =>
  (dispatch: func, getState: func) => {
    const state = getState();
    const website = getWebsiteById(state, websiteId);
    const { config } = getTemplateById(get(website, 'templateId'));
    const schema = get(config, `section.${sectionId}.schema`);

    schema && dispatch({
      type: UPDATE_WEBSITE_SECTION, sectionId, websiteId,
      payload: schema.cast(payload),
    });
  };
