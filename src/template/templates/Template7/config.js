// Template
import {
  // Config
  BACKGROUND,
  ICON,
  SCREENSHOTS,
  SMARTPHONE,
  SMARTPHONE_MOCKUP,
  SOCIAL,
  STORE,
  TEXT,
  TEXT_STYLE,
  // Common
  COPYRIGHT,
  DESCRIPTION,
  TITLE,
} from 'template/config';
import { createConfig } from 'template/utils';

export default createConfig(7, [
  {
    id: 'common_background',
    data: {
      color: 'rgba(255, 255, 255, 1)',
    },
    type: BACKGROUND,
  },
  {
    id: 'intro_background',
    data: {
      image: {
        color: 'rgba(63, 41, 90, .49)',
        src:
          'https://images.unsplash.com/photo-1504556106489-6d450910aeb3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY4NjM0fQ',
      },
    },
    type: BACKGROUND,
  },
  {
    id: 'intro_slogan',
    data: {
      color: 'rgba(255, 255, 255, .7)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Our Favorite',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: 'intro_store',
    data: {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(45, 63, 100, 1)',
    },
    exports: ['items'],
    type: STORE,
  },
  {
    id: 'about_slogan',
    data: {
      color: 'rgba(180, 181, 181, 1)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Our Favorite',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: 'about_title',
    data: {
      color: 'rgba(82, 85, 87, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'About Gmix',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: 'about_text_1',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Gmix APP allows you to find love all over the globe. The search process is based on the interests of users and personal media content. After searching you can select person which you liked and start chatting on the interests. ',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: 'about_text_2',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Gmix APP allows you to find love all over the globe. The search process is based on the interests of users and personal media content. After searching you can select person which you liked and start chatting on the interests. ',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: 'about_text_3',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Gmix APP allows you to find love all over the globe. The search process is based on the interests of users and personal media content. After searching you can select person which you liked and start chatting on the interests. ',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: DESCRIPTION,
    data: {
      color: 'rgba(255, 255, 255, .7)',
      style: TEXT_STYLE.BOLD,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: TITLE,
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'Our Favorite Site',
    },
    exports: ['text'],
    type: TEXT,
  },
]);
