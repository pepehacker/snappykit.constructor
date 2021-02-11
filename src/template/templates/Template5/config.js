// Template
import {
  // Config
  BACKGROUND,
  BACKGROUND_LIST,
  ICON,
  POLICY,
  SCREENSHOTS,
  SMARTPHONE,
  SOCIAL,
  STORE,
  TEXT,
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
        src: BACKGROUND_LIST[1]
      }
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
      color: 'rgba(255, 255, 255, 1)',
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
      mockup: 'iphone-11-glass-black'
    },
    exports: ['mockup'],
    type: SMARTPHONE
  },
  {
    id: SOCIAL,
    data: {
      color: 'rgba(107, 107, 107, 1)'
    },
    exports: ['items'],
    type: SOCIAL
  },
  {
    id: STORE,
    data: {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(182, 124, 193, 1)'
    },
    exports: ['items'],
    type: STORE
  },
  {
    id: TITLE,
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.LIGHT,
      text: 'Serif Beauty'
    },
    exports: ['text'],
    type: TEXT
  }
]);
