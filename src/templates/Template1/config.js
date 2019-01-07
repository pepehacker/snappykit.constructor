import { values } from 'lodash';
import { object, string } from 'yup';

// Ducks
import {
  COLOR,
  FONT,
  SMARTPHONE_MOCKUP,
  SOCIAL,
  STORE,
  STYLE,
} from 'entities/template/constants';

import {
  DESCRIPTION,
  SMARTPHONE,
  TITLE,
} from './ducks/constants';

export default {
  id: 1,
  fields: {
    [DESCRIPTION]: {
      id: DESCRIPTION,
      schema: object().shape({
        color: string()
          .matches(COLOR.regex, 'Incorrect `color`!')
          .default('rgba(255, 255, 255, .8)'),
        font: string()
          .matches(FONT.regex, 'Incorrect `font-family` name!')
          .default(FONT.ROBOTO),
        style: string()
          .matches(STYLE.regex, 'Incorrect `font-weight` value!')
          .default(STYLE.REGULAR),
        text: string()
          .default('Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).'),
      }),
    },
    [SMARTPHONE]: {
      id: SMARTPHONE,
      schema: string()
        .matches(new RegExp(`/^(${values(SMARTPHONE_MOCKUP).join('|')})$/`), 'Incorrect `smartphone` ID!')
        .default(SMARTPHONE_MOCKUP.FLAT_IPHONE_SILVER),
    },
    [SOCIAL]: {
      id: SOCIAL,
      schema: object().shape({
        color: string()
          .matches(COLOR.regex, 'Incorrect `color`!')
          .default('rgba(255, 255, 255, 1)'),
        items: object().shape({
          instagram: string()
            .matches(/^([0-9a-zA-Z_]{1,32})$/),
          facebook: string()
            .matches(/^([0-9a-zA-Z_]{1,32})$/),
          twitter: string()
            .matches(/^([0-9a-zA-Z_]{1,32})$/),
          vk: string()
            .matches(/^(id|club)?([0-9a-zA-Z_]{1,32})$/)
            .default('ivan_vyatkin')
        }),
      }),
    },
    [STORE]: {
      id: STORE,
      schema: object().shape({
        appStore: string()
          .matches(/^(id[0-9]{1,16})$/)
          .default('id564177498'),
        googlePlay: string()
          .matches(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/),
        background: string()
          .matches(COLOR.regex, 'Incorrect `color`!')
          .default('rgba(255, 255, 255, 1)'),
        color: string()
          .matches(COLOR.regex, 'Incorrect `color`!')
          .default('rgba(112, 101, 251, 1)'),
      }),
    },
    [TITLE]: {
      id: TITLE,
      length: 16,
      schema: object().shape({
        color: string()
          .matches(COLOR.regex, 'Incorrect `color`!')
          .default('rgba(255, 255, 255, 1)'),
        font: string()
          .matches(FONT.regex, 'Incorrect `font-family` name!')
          .default(FONT.ROBOTO),
        style: string()
          .matches(STYLE.regex, 'Incorrect `font-weight` value!')
          .default(STYLE.REGULAR),
        text: string()
          .max(16, 'Title text must not exceed 16 characters!')
          .default('Make cool audio, right from your phone.'),
      }),
    },
  },
};
