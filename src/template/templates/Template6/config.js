// Template
import {
  // Config
  BACKGROUND,
  BACKGROUND_LIST,
  ICON,
  POLICY,
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

export default createConfig(6, [
  {
    id: 'download_background',
    data: {
      color: 'rgba(39, 43, 52, 1)',
    },
    type: BACKGROUND,
  },
  {
    id: 'download_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.BOLD,
      text:
        'The search based on the interests of users and personal media content.  Gmix APP allows you to find love all over the globe.',
    },
    type: TEXT,
  },
  {
    id: 'download_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'Download the App',
    },
    type: TEXT,
  },
  {
    id: 'step1_background',
    data: {
      color: 'rgba(32, 35, 42, 1)',
    },
    type: BACKGROUND,
  },
  {
    id: 'step1_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.BOLD,
      text:
        'Gmix APP allows you to find love all over the globe. The search process is based on the interests of users and personal media content. After searching you can select person which you  liked and start chatting interests. ',
    },
    type: TEXT,
  },
  {
    id: 'step1_number',
    data: {
      color: 'rgba(36, 39, 48, 1)',
      style: TEXT_STYLE.LIGHT,
      text: '1',
    },
    type: TEXT,
  },
  {
    id: 'step1_subtitle',
    data: {
      color: 'rgba(60, 105, 220, 1)',
      style: TEXT_STYLE.REGULAR,
      text: 'Gmix Allows',
    },
    type: TEXT,
  },
  {
    id: 'step1_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'Love all over',
    },
    type: TEXT,
  },
  {
    id: 'step2_background',
    data: {
      color: 'rgba(32, 35, 42, 1)',
    },
    type: BACKGROUND,
  },
  {
    id: 'step2_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.BOLD,
      text:
        'Gmix APP allows you to find love all over the globe. The search process is based on the interests of users and personal media content. After searching you can select person which you  liked and start chatting interests. ',
    },
    type: TEXT,
  },
  {
    id: 'step2_number',
    data: {
      color: 'rgba(36, 39, 48, 1)',
      style: TEXT_STYLE.LIGHT,
      text: '2',
    },
    type: TEXT,
  },
  {
    id: 'step2_subtitle',
    data: {
      color: 'rgba(60, 105, 220, 1)',
      style: TEXT_STYLE.REGULAR,
      text: 'Gmix Allows',
    },
    type: TEXT,
  },
  {
    id: 'step2_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'Love all over',
    },
    type: TEXT,
  },
  {
    id: 'step3_background',
    data: {
      color: 'rgba(32, 35, 42, 1)',
    },
    type: BACKGROUND,
  },
  {
    id: 'step3_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.BOLD,
      text:
        'Gmix APP allows you to find love all over the globe. The search process is based on the interests of users and personal media content. After searching you can select person which you  liked and start chatting interests. ',
    },
    type: TEXT,
  },
  {
    id: 'step3_number',
    data: {
      color: 'rgba(36, 39, 48, 1)',
      style: TEXT_STYLE.LIGHT,
      text: '3',
    },
    type: TEXT,
  },
  {
    id: 'step3_subtitle',
    data: {
      color: 'rgba(60, 105, 220, 1)',
      style: TEXT_STYLE.REGULAR,
      text: 'Gmix Allows',
    },
    type: TEXT,
  },
  {
    id: 'step3_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'Love all over',
    },
    type: TEXT,
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(255, 255, 255, .4)',
      style: TEXT_STYLE.MEDIUM,
      text: '©2018 SnappyKit',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: ICON,
    data: {
      src:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1280px-Behance_logo.svg.png',
    },
    exports: ['src'],
    type: ICON,
  },
  {
    id: SOCIAL,
    data: {
      color: 'rgba(255, 255, 255, 1)',
    },
    exports: ['items'],
    type: SOCIAL,
  },
  {
    id: STORE,
    data: {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(46, 58, 74, 1)',
    },
    exports: ['items'],
    type: STORE,
  },
  {
    id: TITLE,
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.LIGHT,
      text: 'Serif Beauty',
    },
    exports: ['text'],
    type: TEXT,
  },
]);
