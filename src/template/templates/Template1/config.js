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

export default createConfig(1, [
  {
    id: BACKGROUND,
    data: {
      image: {
        src: BACKGROUND_LIST[0]
      },
      mode: BACKGROUND_MODE.IMAGE
    },
    type: BACKGROUND
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(42, 51, 69, .4)',
      style: TEXT_STYLE.MEDIUM,
      text: '© 2018 ANCHOR FM INC'
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
        'Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).'
    },
    exports: ['text'],
    type: TEXT
  },
  {
    id: ICON,
    data: {
      src:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/44/88/0d/44880de1-a4ca-1c1d-39bb-2ee7548a3e70/source/512x512bb.jpg'
    },
    exports: ['src'],
    type: ICON
  },
  {
    id: POLICY,
    data: {
      color: 'rgba(117, 117, 127, 1)'
    },
    exports: ['src'],
    type: POLICY
  },
  {
    id: SCREENSHOTS,
    data: {
      items: [
        'https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg',
        'https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg',
        'https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg'
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
      text: 'Make cool audio, right from your phone.'
    },
    exports: ['text'],
    type: TEXT
  }
]);
