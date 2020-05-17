// Templates
import {
  // Actions
  createTemplateData,
  // Config
  STORE_APP_STORE,
  STORE_APP_STORE_PREFIX,
  STORE_GOOGLE_PLAY_PREFIX,
  // Selectors
  getFirstTemplate
} from 'template';

// Types
import { CREATE_WEBSITE } from '../types';

export default ({ storeId, provider, ...values }): func => (
  dispatch: func,
  getState: func,
  { api, history }
): Object<Promise> => {
  const { config, id: templateId } = getFirstTemplate();
  const { description, logo, title } = values;

  dispatch({
    type: CREATE_WEBSITE,
    payload: {
      description,
      logo,
      templateId,
      storeId,
      title,
      data: createTemplateData(
        {
          ...values,
          icon: { src: logo },
          store: {
            items: {
              [provider]: `${
                provider === STORE_APP_STORE
                  ? STORE_APP_STORE_PREFIX
                  : STORE_GOOGLE_PLAY_PREFIX
              }${storeId}`
            }
          }
        },
        config
      ),
      isFetching: false,
      provider: provider === STORE_APP_STORE ? 1 : 2
    }
  });

  history.push('/new/editor/templates');
};
