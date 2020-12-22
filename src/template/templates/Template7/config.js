// Template
import {
  // Config
  BACKGROUND,
  ICON,
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

export default createConfig(7, [
  {
    id: 'common_background',
    data: {
      color: 'rgba(255, 255, 255, 1)'
    },
    type: BACKGROUND
  },
  {
    id: BACKGROUND,
    data: {
      image: {
        color: 'rgba(63, 41, 90, .49)',
        src:
          'https://images.unsplash.com/photo-1504556106489-6d450910aeb3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY4NjM0fQ'
      }
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
    id: 'intro_slogan',
    data: {
      color: 'rgba(255, 255, 255, .7)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Our Favorite'
    },
    exports: ['text'],
    type: TEXT
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
    id: 'about_slogan',
    data: {
      color: 'rgba(180, 181, 181, 1)',
      style: TEXT_STYLE.MEDIUM,
      text: 'Our Favorite'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'about_title',
    data: {
      color: 'rgba(82, 85, 87, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'About Gmix'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'about_text',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.MEDIUM,
      text:
        'Gmix APP allows you to find love all over the globe. The search process is based on the interests of users and personal media content. After searching you can select person which you liked and start chatting on the interests. '
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
      mockup: 'iphone-11-glass-black'
    },
    exports: ['mockup'],
    type: SMARTPHONE
  },
  {
    id: 'preview_slogan',
    data: {
      color: 'rgba(180, 181, 181, 1)',
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
      style: TEXT_STYLE.BOLD,
      text: 'Preview Gmix'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_1_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.REGULAR,
      text:
        'Gmix APP allows you to find love. The search process is based on the users and personal media.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_1_title',
    data: {
      color: 'rgba(126, 128, 129, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'our favorite serif'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_2_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.REGULAR,
      text:
        'Gmix APP allows you to find love. The search process is based on the users and personal media.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_2_title',
    data: {
      color: 'rgba(126, 128, 129, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'our favorite serif'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_3_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.REGULAR,
      text:
        'Gmix APP allows you to find love. The search process is based on the users and personal media.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_3_title',
    data: {
      color: 'rgba(126, 128, 129, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'our favorite serif'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_4_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
      style: TEXT_STYLE.REGULAR,
      text:
        'Gmix APP allows you to find love. The search process is based on the users and personal media.'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'preview_4_title',
    data: {
      color: 'rgba(126, 128, 129, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'our favorite serif'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'quote_author',
    data: {
      color: 'rgba(164, 167, 169, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'Crystal Studio'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: 'quote_title',
    data: {
      color: 'rgba(67, 71, 73, 1)',
      style: TEXT_STYLE.BOLD,
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
      mockup: 'iphone-11-glass-black'
    },
    exports: ['mockup'],
    type: SMARTPHONE
  },
  {
    id: 'download_store',
    data: {
      background: 'rgba(45, 63, 100, 1)',
      color: 'rgba(255, 255, 255, 1)'
    },
    exports: ['items'],
    link: STORE,
    type: STORE
  },
  {
    id: 'download_description',
    data: {
      color: 'rgba(123, 129, 144, 1)',
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
      color: 'rgba(82, 85, 87, 1)',
      style: TEXT_STYLE.BOLD,
      text: 'Download Gmix App'
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
      color: 'rgba(255, 255, 255, .7)',
      style: TEXT_STYLE.BOLD,
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
      style: TEXT_STYLE.BOLD,
      text: 'Our Favorite Site'
    },
    exports: ['text'],
    type: TEXT
  }
]);
