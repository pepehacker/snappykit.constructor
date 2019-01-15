import { object, string } from 'yup';
import { TEXT_COLOR } from './text';

export const SOCIAL = 'social';

// Networks
export const SOCIAL_FACEBOOK = 'facebook';
export const SOCIAL_INSTAGRAM = 'instagram';
export const SOCIAL_TWITTER = 'twitter';
export const SOCIAL_VK = 'vk';

// Schema
export const SOCIAL_SCHEMA = object().shape({
  color: string()
    .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!')
    .default('rgba(255, 255, 255, 1)'),
  items: object().shape({
    instagram: string()
      .matches(/^(https:\/\/instagram.com\/)?([a-zA-Z0-9_]{2,20})$/, 'Incorrect `Instagram` URL!'),
    facebook: string()
      .matches(/^(https:\/\/facebook.com\/)?([a-zA-Z0-9_]{2,20})$/, 'Incorrect `Facebook` URL!'),
    twitter: string()
      .matches(/^(https:\/\/twitter.com\/)?([a-zA-Z0-9_]{2,20})$/, 'Incorrect `Twitter` URL!'),
    vk: string()
      .matches(/^(https:\/\/vk.com\/)?(id|club)?([a-zA-Z0-9_]{2,20})$/, 'Incorrect `VK` URL!'),
  }),
});
