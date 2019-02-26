// Templates
import {
  createTemplateData,
  getFirstTemplate,
} from 'template';

// Types
import { CREATE_WEBSITE } from '../types';


export default ({ link, store, storeId, storeProvider, ...values }): func =>
  (dispatch: func, getState: func, { api, history }): Object<Promise> => {
    const { config, id: templateId } = getFirstTemplate();
    const { description, logo, title } = values;

    dispatch({
      type: CREATE_WEBSITE,
      payload: {
        description, logo, templateId, title,
        storeId, storeProvider,
        data: createTemplateData({
          ...values,
          icon: logo,
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
