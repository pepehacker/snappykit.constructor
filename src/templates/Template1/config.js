import { object } from 'yup';

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
  id: 1,
  section: {
    [BACKGROUND]: {
      schema: BACKGROUND_SCHEMA({
        color: 'rgba(255, 255, 255, 0)',
        gradient: {
          angle: 0,
          from: 'rgba(123, 84, 251, 1)',
          to: 'rgba(71, 159, 255, 1)',
        },
      }),
    },
    [COPYRIGHT]: {
      schema: TEXT_SCHEMA({
        color: 'rgba(255, 255, 255, .4)',
        text: '© 2018 ANCHOR FM INC'
      }),
    },
    [DESCRIPTION]: {
      schema: TEXT_SCHEMA({
        color: 'rgba(255, 255, 255, .8)',
        text: 'Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).'
      }),
    },
    [ICON]: {
      schema: ICON_SCHEMA({
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/44/88/0d/44880de1-a4ca-1c1d-39bb-2ee7548a3e70/source/512x512bb.jpg',
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
    [SCREENSHOTS]: {
      schema: SCREENSHOTS_SCHEMA({
        items: [
          'https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg',
          'https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg',
          'https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg',
        ],
      }),
    },
    [SMARTPHONE]: {
      schema: SMARTPHONE_SCHEMA({
        mockup: SMARTPHONE_MOCKUP.FLAT_IPHONE_GRAY,
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
        text: 'Make cool audio, right from your phone.'
      }),
    },
  },
});
