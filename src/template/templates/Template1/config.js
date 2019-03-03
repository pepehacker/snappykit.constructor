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
  // Screenshots
  SCREENSHOTS, SCREENSHOTS_SCHEMA,
  // Smartphone
  SMARTPHONE, SMARTPHONE_SCHEMA, SMARTPHONE_MOCKUP,
  // Social
  SOCIAL, SOCIAL_SCHEMA,
  // Store
  STORE, STORE_SCHEMA,
  // Text
  TEXT_SCHEMA, TEXT_STYLE,
  // Common
  COPYRIGHT, DESCRIPTION, TITLE,
} from 'entities/template/constants';

export default ({
  id: 1,
  // logo: ICON,
  section: {
    [BACKGROUND]: {
      schema: BACKGROUND_SCHEMA({
        color: '',
        gradient: {
          angle: 0,
          from: '',
          to: '',
        },
        image: require('assets/backgrounds/w-1.png'),
      }),
    },
    [COPYRIGHT]: {
      export: ['text'],
      schema: TEXT_SCHEMA({
        color: 'rgba(117, 117, 127, .6)',
        style: TEXT_STYLE.MEDIUM,
        text: '© 2018 ANCHOR FM INC'
      }),
    },
    [DESCRIPTION]: {
      export: ['text'],
      schema: TEXT_SCHEMA({
        color: 'rgba(117, 117, 127, .8)',
        text: 'Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).'
      }),
    },
    [ICON]: {
      export: ['src'],
      schema: ICON_SCHEMA({
        src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/44/88/0d/44880de1-a4ca-1c1d-39bb-2ee7548a3e70/source/512x512bb.jpg',
      }),
    },
    [POLICY]: {
      schema: POLICY_SCHEMA({
        color: 'rgba(117, 117, 127, 1)',
      }),
    },
    [SCREENSHOTS]: {
      export: ['items'],
      schema: SCREENSHOTS_SCHEMA({
        items: [
          'https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg',
          'https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg',
          'https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg',
        ],
      }),
    },
    [SMARTPHONE]: {
      export: ['mockup'],
      schema: SMARTPHONE_SCHEMA({
        mockup: SMARTPHONE_MOCKUP.FLAT_IPHONE_SILVER,
      }),
    },
    [SOCIAL]: {
      export: ['items'],
      schema: SOCIAL_SCHEMA({
        color: 'rgba(117, 117, 127, 1)',
      }),
    },
    [STORE]: {
      export: ['items'],
      schema: STORE_SCHEMA({
        background: 'rgba(255, 255, 255, 1)',
        color: 'rgba(117, 117, 127, 1)',
      }),
    },
    [TITLE]: {
      export: ['text'],
      schema: TEXT_SCHEMA({
        color: 'rgba(117, 117, 127, 1)',
        text: 'Make cool audio, right from your phone.'
      }),
    },
  },
});
