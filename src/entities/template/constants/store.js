import { object, string } from 'yup';
import { TEXT_COLOR } from './text';

export const STORE = 'store';

export const STORE_BACKGROUND = 'background';
export const STORE_COLOR = 'color';

// Markets
export const STORE_APP_STORE = 'appStore';
export const STORE_GOOGLE_PLAY = 'googlePlay';

// Schema
export const STORE_SCHEMA = object().shape({
  background: string()
    .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!'),
  color: string()
    .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!'),
  items: object().shape({
    appStore: string()
      .matches(/^(id[0-9]{1,16})$/, 'Incorrect `APP STORE` URL!'),
    googlePlay: string()
      .matches(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/, 'Incorrect `GOOGLE PLAY` URL!')
  }),
});
