import { object, string } from 'yup';

// Ducks
import { COLOR, STYLE } from 'entities/template';
import { DESCRIPTION, TITLE } from './ducks';

export default {
  [DESCRIPTION]: {
    id: DESCRIPTION,
    schema: object().shape({
      color: string()
        .matches(COLOR.regex)
        .default('rgba(255, 255, 255, .8)'),
      weight: string()
        .matches(STYLE.regex, 'Incorrect `font-weight` value!')
        .default(STYLE.REGULAR),
      text: string()
        .default('Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).'),
    }),
  },
  [TITLE]: {
    id: TITLE,
    length: 16,
    schema: object().shape({
      color: string()
        .matches(COLOR.regex)
        .default('rgba(255, 255, 255, 1)'),
      style: string()
        .matches(STYLE.regex, 'Incorrect `font-weight` value!')
        .default(STYLE.REGULAR),
      text: string()
        .max(16, 'Title text must not exceed 16 characters!')
        .default('Make cool audio, right from your phone.'),
    }),
  },
};
