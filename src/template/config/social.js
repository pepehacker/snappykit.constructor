import { get } from 'lodash';
import { object, string } from 'yup';
import { TEXT_COLOR } from './text';

export const SOCIAL = 'social';

// Networks
export const SOCIAL_FACEBOOK = 'facebook';
export const SOCIAL_INSTAGRAM = 'instagram';
export const SOCIAL_TWITTER = 'twitter';
// export const SOCIAL_VK = 'vk';

// Schema
export const SOCIAL_SCHEMA = (defaults: Object) =>
  object().shape({
    color: string()
      .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!')
      .default(get(defaults, 'color', 'rgba(255, 255, 255, 1)')),
    items: object().shape({
      [SOCIAL_INSTAGRAM]: string()
        .matches(
          /^(https:\/\/instagram.com\/)?([a-zA-Z0-9_]{2,20})$/,
          'Incorrect `Instagram` URL!'
        )
        .default(get(defaults, SOCIAL_INSTAGRAM)),
      [SOCIAL_FACEBOOK]: string()
        .matches(
          /^(https:\/\/facebook.com\/)?([a-zA-Z0-9_]{2,20})$/,
          'Incorrect `Facebook` URL!'
        )
        .default(get(defaults, SOCIAL_FACEBOOK)),
      [SOCIAL_TWITTER]: string()
        .matches(
          /^(https:\/\/twitter.com\/)?([a-zA-Z0-9_]{2,20})$/,
          'Incorrect `Twitter` URL!'
        )
        .default(get(defaults, SOCIAL_TWITTER))
      // [SOCIAL_VK]: string()
      //   .matches(
      //     /^(https:\/\/vk.com\/)?(id|club)?([a-zA-Z0-9_]{2,20})$/,
      //     'Incorrect `VK` URL!'
      //   )
      //   .default(get(defaults, SOCIAL_VK))
    })
  });
