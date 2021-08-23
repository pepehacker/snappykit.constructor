// Template
import { SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'components/Smartphone';

import {
  // Config
  BACKGROUND,
  BACKGROUND_LIST,
  BACKGROUND_MODE,
  ICON,
  SCREENSHOTS,
  SMARTPHONE,
  SOCIAL,
  STORE,
  TEXT,
  TEXT_FONT,
  TEXT_STYLE,
  // Common
  COPYRIGHT,
  DESCRIPTION,
  TITLE
} from 'template/config';
import { createConfig } from 'template/utils';

export default createConfig(6, [
  {
    id: 'download_background',
    data: {
      color: 'rgba(39, 43, 52, 1)',
      mode: BACKGROUND_MODE.COLOR
    },
    type: BACKGROUND
  },
  {
    id: 'download_description',
    data: {
      color: 'rgba(255, 255, 255, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    type: TEXT
  },
  {
    id: 'download_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Download The App'
    },
    type: TEXT
  },
  {
    id: 'step1_background',
    data: {
      color: 'rgba(32, 35, 42, 1)',
      mode: BACKGROUND_MODE.COLOR
    },
    type: BACKGROUND
  },
  {
    id: 'step1_description',
    data: {
      color: 'rgba(255, 255, 255, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
    },
    type: TEXT
  },
  {
    id: 'step1_number',
    data: {
      color: 'rgba(36, 39, 48, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: '1'
    },
    type: TEXT
  },
  {
    id: 'step1_screenshots',
    exports: ['items'],
    link: SCREENSHOTS,
    type: SCREENSHOTS
  },
  {
    id: 'step1_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Love all over'
    },
    type: TEXT
  },
  {
    id: 'step2_background',
    data: {
      color: 'rgba(39, 43, 52, 1)',
      mode: BACKGROUND_MODE.COLOR
    },
    type: BACKGROUND
  },
  {
    id: 'step2_description',
    data: {
      color: 'rgba(255, 255, 255, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
    },
    type: TEXT
  },
  {
    id: 'step2_number',
    data: {
      color: 'rgba(36, 39, 48, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: '2'
    },
    type: TEXT
  },
  {
    id: 'step2_screenshots',
    exports: ['items'],
    link: SCREENSHOTS,
    type: SCREENSHOTS
  },
  {
    id: 'step2_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Love all over'
    },
    type: TEXT
  },
  {
    id: 'step3_background',
    data: {
      color: 'rgba(32, 35, 42, 1)',
      mode: BACKGROUND_MODE.COLOR
    },
    type: BACKGROUND
  },
  {
    id: 'step3_description',
    data: {
      color: 'rgba(255, 255, 255, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
    },
    type: TEXT
  },
  {
    id: 'step3_number',
    data: {
      color: 'rgba(36, 39, 48, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: '3'
    },
    type: TEXT
  },
  {
    id: 'step3_screenshots',
    exports: ['items'],
    link: SCREENSHOTS,
    type: SCREENSHOTS
  },
  {
    id: 'step3_title',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Love all over'
    },
    type: TEXT
  },
  {
    id: BACKGROUND,
    data: {
      image: {
        gradient: {
          angle: 180,
          from: 'rgba(39, 43, 52, .4)',
          to: 'rgba(39, 43, 52, 1)'
        },
        src: BACKGROUND_LIST[3]
      },
      mode: BACKGROUND_MODE.IMAGE
    },
    type: BACKGROUND
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(255, 255, 255, .4)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: '©2018 SnappyKit'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: DESCRIPTION,
    data: {
      color: 'rgba(255, 255, 255, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Behance App'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: ICON,
    data: {
      src:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1280px-Behance_logo.svg.png'
    },
    exports: ['src'],
    type: ICON
  },
  {
    id: SCREENSHOTS,
    exports: ['items'],
    type: SCREENSHOTS
  },
  {
    id: SMARTPHONE,
    data: {
      color: 'rgba(255, 255, 255, 1)',
      model: SMARTPHONE_MODEL.IPHONE_12,
      style: SMARTPHONE_STYLE.FLAT
    },
    exports: ['color', 'model', 'style'],
    type: SMARTPHONE
  },
  {
    id: SOCIAL,
    data: {
      color: 'rgba(255, 255, 255, 1)'
    },
    exports: ['items'],
    type: SOCIAL
  },
  {
    id: STORE,
    data: {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(46, 58, 74, 1)'
    },
    exports: ['items'],
    type: STORE
  },
  {
    id: TITLE,
    data: {
      color: 'rgba(60, 105, 220, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Gmix APP allows you to find love all over the globe.'
    },
    exports: ['text'],
    type: TEXT
  }
]);
