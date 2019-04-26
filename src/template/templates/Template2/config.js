/* eslint-disable */
import { get } from 'lodash';

// Template
import {
  // Config
  BACKGROUND,
  BACKGROUND_LIST,
  ICON,
  POLICY,
  POLICY_PRIVACY,
  POLICY_TERMS,
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

export default createConfig(2, [
  {
    id: BACKGROUND,
    data: {
      color: '',
      gradient: {
        angle: 0,
        from: '',
        to: '',
      },
      image: {
        src: BACKGROUND_LIST[4],
      },
    },
    type: BACKGROUND,
  },
  {
    id: COPYRIGHT,
    data: {
      color: 'rgba(255, 255, 255, .4)',
      text: '©2018 Enlight',
    },
    exports: ['text'],
    type: TEXT,
  },
  {
    id: DESCRIPTION,
    data: {
      color: 'rgba(255, 255, 255, .8)',
      text:
        'The most comprehensive, highest quality photo editing app so powerful and user-friendly it’ll be the last photo app you ever download.',
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
      items: {
        [POLICY_PRIVACY]: '123',
        [POLICY_TERMS]: '456',
      },
    },
    exports: ['src'],
    type: POLICY,
  },
  {
    id: SOCIAL,
    exports: ['items'],
    type: SOCIAL,
  },
  {
    id: STORE,
    data: {
      background: 'rgba(255, 255, 255, 1)',
      color: 'rgba(112, 101, 252, 1)',
    },
    exports: ['items'],
    type: STORE,
  },
  {
    id: TITLE,
    data: {
      text: 'Enlight Photofox.',
    },
    exports: ['text'],
    type: TEXT,
  },
]);
