import { values } from 'lodash';
import { array, object, string } from 'yup';

// Entities
import {
  // Section
  DESCRIPTION,
  SOCIAL, SOCIAL_SCHEMA,
  STORE, STORE_SCHEMA,
  TITLE,

  // Common
  TEXT_SCHEMA,
} from 'entities/template/constants';

export default ({
  id: 1,
  section: {
    [DESCRIPTION]: {
      schema: TEXT_SCHEMA.concat(object().shape({
        color: string().default('rgba(255, 255, 255, .8)'),
        text: string().default('Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).'),
      })),
    },
    [SOCIAL]: { schema: SOCIAL_SCHEMA },
    [STORE]: { schema: STORE_SCHEMA },
    [TITLE]: {
      schema: TEXT_SCHEMA.concat(object().shape({
        text: string().default('Make cool audio, right from your phone.'),
      })),
    },
  },
});

// export default {
//   id: 1,
//   fields: {
//     [DESCRIPTION]: {
//       id: DESCRIPTION,
//       schema: object().shape({
//         color: string()
//           .matches(COLOR.regex, 'Incorrect `color`!')
//           .default('rgba(255, 255, 255, .8)'),
//         font: string()
//           .matches(FONT.regex, 'Incorrect `font-family` name!')
//           .default(FONT.ROBOTO),
//         style: string()
//           .matches(STYLE.regex, 'Incorrect `font-weight` value!')
//           .default(STYLE.REGULAR),
//         text: string()
//           .default('Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).'),
//       }),
//     },
//     [ICON]: {
//       id: ICON,
//       schema: object().shape({
//         icon: string()
//           .matches(/^@(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/)
//           .default('https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/44/88/0d/44880de1-a4ca-1c1d-39bb-2ee7548a3e70/source/512x512bb.jpg')
//       }),
//     },
//     [SCREENSHOTS]: {
//       id: SCREENSHOTS,
//       schema: object().shape({
//         items: array()
//           .of(string().matches(/^@(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/))
//           .default([
//             'https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg',
//             'https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg',
//             'https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg',
//           ]),
//       }),
//     },
//     [SMARTPHONE]: {
//       id: SMARTPHONE,
//       schema: string()
//         .matches(new RegExp(`/^(${values(SMARTPHONE_MOCKUP).join('|')})$/`), 'Incorrect `smartphone` ID!')
//         .default(SMARTPHONE_MOCKUP.FLAT_IPHONE_SILVER),
//     },
//     [SOCIAL]: {
//       id: SOCIAL,
//       schema: object().shape({
//         color: string()
//           .matches(COLOR.regex, 'Incorrect `color`!')
//           .default('rgba(255, 255, 255, 1)'),
//         items: object().shape({
//           instagram: string()
//             .matches(/^([0-9a-zA-Z_]{1,32})$/),
//           facebook: string()
//             .matches(/^([0-9a-zA-Z_]{1,32})$/),
//           twitter: string()
//             .matches(/^([0-9a-zA-Z_]{1,32})$/),
//           vk: string()
//             .matches(/^(id|club)?([0-9a-zA-Z_]{1,32})$/)
//             .default('ivan_vyatkin')
//         }),
//       }),
//     },
//     [STORE]: {
//       id: STORE,
//       schema: object().shape({
//         appStore: string()
//           .matches(/^(id[0-9]{1,16})$/)
//           .default('id564177498'),
//         googlePlay: string()
//           .matches(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/),
//         background: string()
//           .matches(COLOR.regex, 'Incorrect `color`!')
//           .default('rgba(255, 255, 255, 1)'),
//         color: string()
//           .matches(COLOR.regex, 'Incorrect `color`!')
//           .default('rgba(112, 101, 251, 1)'),
//       }),
//     },
//     [TITLE]: {
//       id: TITLE,
//       length: 16,
//       schema: object().shape({
//         color: string()
//           .matches(COLOR.regex, 'Incorrect `color`!')
//           .default('rgba(255, 255, 255, 1)'),
//         font: string()
//           .matches(FONT.regex, 'Incorrect `font-family` name!')
//           .default(FONT.ROBOTO),
//         style: string()
//           .matches(STYLE.regex, 'Incorrect `font-weight` value!')
//           .default(STYLE.REGULAR),
//         text: string()
//           .max(16, 'Title text must not exceed 16 characters!')
//           .default('Make cool audio, right from your phone.'),
//       }),
//     },
//   },
// };
