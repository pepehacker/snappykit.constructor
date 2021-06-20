// Template
import {
  // Config
  BACKGROUND,
  BACKGROUND_MODE,
  BACKGROUND_LIST,
  ICON,
  POLICY,
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

export default createConfig(2, [
  {
    id: BACKGROUND,
    data: {
      image: {
        src: BACKGROUND_LIST[1]
      },
      mode: BACKGROUND_MODE.IMAGE
    },
    type: BACKGROUND
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(255, 255, 255, .4)',
      text: '©2018 Enlight'
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
        'The most comprehensive, highest quality photo editing app so powerful and user-friendly it’ll be the last photo app you ever download.'
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
      text: 'Enlight Photofox.'
    },
    exports: ['text'],
    type: TEXT
  }
]);
