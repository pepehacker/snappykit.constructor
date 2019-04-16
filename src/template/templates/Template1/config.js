/* eslint-disable */
import { get } from 'lodash';

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

export default createConfig(1, [
  {
    id: BACKGROUND,
    data: {
      color: '',
      gradient: {
        angle: 0,
        from: '',
        to: '',
      },
      image: BACKGROUND_LIST[4],
    },
    type: BACKGROUND,
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(117, 117, 127, .6)',
      style: TEXT_STYLE.MEDIUM,
      text: '© 2018 ANCHOR FM INC',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: DESCRIPTION,
    data: {
      color: 'rgba(117, 117, 127, .8)',
      text:
        'Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: ICON,
    data: {
      src:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/44/88/0d/44880de1-a4ca-1c1d-39bb-2ee7548a3e70/source/512x512bb.jpg',
    },
    exports: ['src'],
    type: ICON,
  },
  {
    id: POLICY,
    data: {
      color: 'rgba(117, 117, 127, 1)',
    },
    exports: ['src'],
    type: POLICY,
  },
  {
    id: SCREENSHOTS,
    data: {
      items: [
        'https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg',
        'https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg',
        'https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg',
      ],
    },
    exports: ['items'],
    type: SCREENSHOTS,
  },
  {
    id: SMARTPHONE,
    data: {
      mockup: SMARTPHONE_MOCKUP.FLAT_IPHONE_SILVER,
    },
    exports: ['mockup'],
    type: SMARTPHONE,
  },
  {
    id: SOCIAL,
    data: {
      color: 'rgba(117, 117, 127, 1)',
    },
    exports: ['items'],
    type: SOCIAL,
  },
  {
    id: STORE,
    data: {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(117, 117, 127, 1)',
    },
    exports: ['items'],
    type: STORE,
  },
  {
    id: TITLE,
    data: {
      color: 'rgba(117, 117, 127, 1)',
      text: 'Make cool audio, right from your phone.',
    },
    exports: ['text'],
    type: TEXT,
  },
]);
