import { get, keys } from 'lodash';

// Selector
import { getCurrentTemplateId } from './selector';

// Templates
import { getTemplateById } from 'template';

// Types
import {
  SET_TEMPLATE_DATA,
  SET_TEMPLATE_ID,
} from './types';

export const fetchTemplate = (id: number): void => (dispatch: func) => {
  if (id) {
    const { config } = getTemplateById(id);
    const data = {};

    keys(get(config, 'section', {})).forEach((id: string) => {
      const schema = get(config, `section.${id}.schema`);

      if (schema) {
        data[id] = schema.cast();
      }
    });

    dispatch({ type: SET_TEMPLATE_DATA, data });
    dispatch({ type: SET_TEMPLATE_ID, id });
  }
};

export const updateTemplate = (id: string, data: object) => (dispatch: func, getState: func) => {
  const state = getState();
  const { config } = getTemplateById(getCurrentTemplateId(state));
  const schema = get(config, `section.${id}.schema`, {});

  dispatch({
    type: SET_TEMPLATE_DATA,
    data: { [id]: schema.cast(data) },
  });
};
