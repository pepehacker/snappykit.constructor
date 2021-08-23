// Template
import { SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'components/Smartphone';

import {
  // Config
  BACKGROUND,
  BACKGROUND_MODE,
  BACKGROUND_LIST,
  ICON,
  POLICY,
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

export default createConfig(5, [
  {
    id: BACKGROUND,
    data: {
      image: {
        src: BACKGROUND_LIST[2]
      },
      mode: BACKGROUND_MODE.IMAGE
    },
    type: BACKGROUND
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(107, 107, 107, .4)',
      style: TEXT_STYLE.MEDIUM,
      text: '©2018 SnappyKit'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: DESCRIPTION,
    data: {
      color: 'rgba(42, 51, 69, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
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
    id: POLICY,
    data: {
      color: 'rgba(107, 107, 107, .6)'
    },
    exports: ['src'],
    type: POLICY
  },
  {
    id: SCREENSHOTS,
    data: {
      items: [
        'https://en.instagram-brand.com/wp-content/uploads/2016/11/Feed_iOS.png?w=750&h=1334'
      ]
    },
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
      color: 'rgba(42, 51, 69, 1)'
    },
    exports: ['items'],
    type: SOCIAL
  },
  {
    id: STORE,
    data: {
      background: 'rgba(42, 51, 69, 1)',
      color: 'rgba(255, 255, 255, 1)'
    },
    exports: ['items'],
    type: STORE
  },
  {
    id: TITLE,
    data: {
      color: 'rgba(42, 51, 69, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Serif Beauty'
    },
    exports: ['text'],
    type: TEXT
  }
]);
