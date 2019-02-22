/* eslint-disable */
import { get } from 'lodash';

// Entities
import {
  // Background
  BACKGROUND, BACKGROUND_SCHEMA,

  // Icon
  ICON, ICON_SCHEMA,

  // POLICY
  POLICY, POLICY_SCHEMA,
  POLICY_PRIVACY, POLICY_TERMS,

  // Screenshots
  SCREENSHOTS, SCREENSHOTS_SCHEMA,

  // Smartphone
  SMARTPHONE, SMARTPHONE_SCHEMA,
  SMARTPHONE_MOCKUP,

  // Social
  SOCIAL, SOCIAL_SCHEMA,
  SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM, SOCIAL_TWITTER,

  // Store
  STORE, STORE_SCHEMA,
  STORE_APP_STORE, STORE_GOOGLE_PLAY,

  // Common
  COPYRIGHT,
  DESCRIPTION,
  TEXT_SCHEMA,
  TITLE,
} from 'entities/template/constants';

export default ({
  id: 2,
  section: {
    [BACKGROUND]: {
      schema: BACKGROUND_SCHEMA({
        color: '',
        gradient: {
          angle: 0,
          from: '',
          to: '',
        },
        image: require('assets/backgrounds/d-2.png'),
      }),
    },
    [COPYRIGHT]: {
      schema: TEXT_SCHEMA({
        color: 'rgba(255, 255, 255, .4)',
        text: '©2018 Enlight'
      }),
    },
    [DESCRIPTION]: {
      schema: TEXT_SCHEMA({
        color: 'rgba(255, 255, 255, .8)',
        text: 'The most comprehensive, highest quality photo editing app so powerful and user-friendly it’ll be the last photo app you ever download.'
      }),
    },
    [ICON]: {
      schema: ICON_SCHEMA({
        src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/44/88/0d/44880de1-a4ca-1c1d-39bb-2ee7548a3e70/source/512x512bb.jpg',
      }),
    },
    [POLICY]: {
      schema: POLICY_SCHEMA({
        items: {
          [POLICY_PRIVACY]: '123',
          [POLICY_TERMS]: '456',
        },
      }),
    },
    [SOCIAL]: {
      schema: SOCIAL_SCHEMA({
        [SOCIAL_FACEBOOK]: '@durov',
        [SOCIAL_INSTAGRAM]: '@i.vyatkin',
        [SOCIAL_TWITTER]: '@i.vyatkin',
      }),
    },
    [STORE]: {
      schema: STORE_SCHEMA({
        background: 'rgba(255, 255, 255, 1)',
        color: 'rgba(112, 101, 252, 1)',
        items: {
          [STORE_APP_STORE]: 'appStore',
          [STORE_GOOGLE_PLAY]: 'googlePlay',
        },
      }),
    },
    [TITLE]: {
      schema: TEXT_SCHEMA({
        text: 'Enlight Photofox'
      }),
    },
  },
});

export const getExportData = (data: Object) => ({
  [COPYRIGHT]: {
    text: get(data, `${COPYRIGHT}.text`),
  },
  [DESCRIPTION]: {
    text: get(data, `${DESCRIPTION}.text`),
  },
  [ICON]: {
    icon: get(data, `${ICON}.icon`),
  },
  [POLICY]: {
    items: get(data, `${POLICY}.items`),
  },
  [SCREENSHOTS]: {
    items: get(data, `${SCREENSHOTS}.items`),
  },
  [STORE]: {
    items: get(data, `${STORE}.items`),
  },
  [TITLE]: {
    text: get(data, `${TITLE}.text`),
  },
});
