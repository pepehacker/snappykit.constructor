// Template
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

export default createConfig(7, [
  {
    id: 'common_background',
    data: {
      color: 'rgba(255, 255, 255, 1)',
      mode: BACKGROUND_MODE.COLOR
    },
    type: BACKGROUND
  },
  {
    id: BACKGROUND,
    data: {
      image: {
        src: BACKGROUND_LIST[4]
      },
      mode: BACKGROUND_MODE.IMAGE
    },
    type: BACKGROUND
  },
  {
    id: SCREENSHOTS,
    exports: ['items'],
    link: SCREENSHOTS,
    type: SCREENSHOTS
  },

  {
    id: SMARTPHONE,
    data: {
      mockup: 'iphone-11-flat-black'
    },
    exports: ['mockup'],
    type: SMARTPHONE
  },
  {
    id: 'about_title',
    data: {
      color: 'rgba(82, 85, 87, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'About App'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'about_text',
    data: {
      color: 'rgba(82, 85, 87, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_screenshots',
    exports: ['items'],
    link: SCREENSHOTS,
    type: SCREENSHOTS
  },
  {
    id: 'preview_smartphone',
    data: {
      mockup: 'iphone-11-flat-black'
    },
    exports: ['mockup'],
    type: SMARTPHONE
  },
  {
    id: 'preview_slogan',
    data: {
      color: 'rgba(42, 51, 69, .8)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Our Favorite'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_title',
    data: {
      color: 'rgba(82, 85, 87, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Preview Gmix'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_1_description',
    data: {
      color: 'rgba(42, 51, 69, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_1_title',
    data: {
      color: 'rgba(42, 51, 69, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'DISCOVER OUR APP'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_2_description',
    data: {
      color: 'rgba(42, 51, 69, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_2_title',
    data: {
      color: 'rgba(42, 51, 69, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'DISCOVER OUR APP'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_3_description',
    data: {
      color: 'rgba(42, 51, 69, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_3_title',
    data: {
      color: 'rgba(42, 51, 69, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'DISCOVER OUR APP'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_4_description',
    data: {
      color: 'rgba(42, 51, 69, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_4_title',
    data: {
      color: 'rgba(42, 51, 69, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'DISCOVER OUR APP'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'quote_author',
    data: {
      color: 'rgba(82, 85, 87, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Snappykit'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'quote_title',
    data: {
      color: 'rgba(42, 51, 69, .8)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'download_screenshots',
    exports: ['items'],
    link: SCREENSHOTS,
    type: SCREENSHOTS
  },
  {
    id: 'download_smartphone',
    data: {
      mockup: 'iphone-11-flat-black'
    },
    exports: ['mockup'],
    type: SMARTPHONE
  },
  {
    id: 'download_store',
    data: {
      background: 'rgba(42, 51, 69, 1)',
      color: 'rgba(255, 255, 255, 1)'
    },
    exports: ['items'],
    link: STORE,
    type: STORE
  },
  {
    id: 'download_description',
    data: {
      color: 'rgba(42, 51, 69, 1)',
      style: TEXT_STYLE.BOLD,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'download_title',
    data: {
      color: 'rgba(42, 51, 69, 1)',
      font: TEXT_FONT.MONTSERRAT,
      style: TEXT_STYLE.MEDIUM,
      text: 'Download The App'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(107, 107, 107, .4)',
      style: TEXT_STYLE.MEDIUM,

      text: '©2020 SnappyKit'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: DESCRIPTION,
    data: {
      color: 'rgba(255, 255, 255, .8)',
      style: TEXT_STYLE.MEDIUM,

      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: ICON,
    exports: ['src'],
    type: ICON
  },
  {
    id: SCREENSHOTS,
    exports: ['items'],
    type: SCREENSHOTS
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
      color: 'rgba(45, 63, 100, 1)'
    },
    exports: ['items'],
    type: STORE
  },
  {
    id: TITLE,
    data: {
      color: 'rgba(255, 255, 255, 1)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Our Favorite Site'
    },
    exports: ['text'],
    type: TEXT
  }
]);
