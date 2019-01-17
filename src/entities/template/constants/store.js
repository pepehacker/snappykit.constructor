import { get } from 'lodash';
import { object, string } from 'yup';
import { TEXT_COLOR } from './text';

export const STORE = 'store';

export const STORE_BACKGROUND = 'background';
export const STORE_COLOR = 'color';

// Markets
export const STORE_APP_STORE = 'appStore';
export const STORE_GOOGLE_PLAY = 'googlePlay';

// Schema
export const STORE_SCHEMA = (defaults: Object): Object => object().shape({
  [STORE_BACKGROUND]: string()
    .matches(TEXT_COLOR.regex, 'Incorrect `BACKGROUND`!')
    .default(get(defaults, STORE_BACKGROUND)),
  [STORE_COLOR]: string()
    .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!')
    .default(get(defaults, STORE_COLOR)),
  items: object().shape({
    [STORE_APP_STORE]: string()
      .matches(/^(id[0-9]{1,16})$/, 'Incorrect `APP STORE` URL!')
      .default(get(defaults, `items.${STORE_APP_STORE}`)),
    [STORE_GOOGLE_PLAY]: string()
      .matches(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/, 'Incorrect `GOOGLE PLAY` URL!')
      .default(get(defaults, `items.${STORE_GOOGLE_PLAY}`)),
  }),
});
