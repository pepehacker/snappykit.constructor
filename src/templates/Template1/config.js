import { values } from 'lodash';
import { object, string } from 'yup';

// Ducks
import {
  COLOR,
  FONT,
  SMARTPHONE_MOCKUP,
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
