import {
  // Interval
  MONTH,
  YEAR,
  // Plans
  PLAN_AGENCY,
  PLAN_BASIC,
  PLAN_LITE,
  PLAN_PRO,
  // Price
  PRICE_AVERAGE,
  PRICE_MAX,
  PRICE_MIN,
} from '../ducks';

const FEATURES = [
  'All Lite plan features',
  'All website templates',
  'Custom domain',
  'Unlimited traffic',
  'No Snappykit’s brand ads',
  'Terms of use',
  'Privacy policy',
  'Add the second app link',
];

export default [
  {
    id: PLAN_LITE,
    count: 1,
    features: [
      'App website',
      '4 website templates',
      'Search from App Store',
      'Search from Google Play',
    ],
    productIds: 0,
    title: 'LITE',
  },
  {
    id: PLAN_BASIC,
    count: 3,
    features: FEATURES,
    productIds: {
      [MONTH]: {
        [PRICE_MIN]: 551696,
        [PRICE_AVERAGE]: 551701,
        [PRICE_MAX]: 551704,
      },
      [YEAR]: {
        [PRICE_MIN]: 551707,
        [PRICE_AVERAGE]: 551710,
        [PRICE_MAX]: 551713,
      },
    },
    title: 'BASIC',
  },
  {
    id: PLAN_PRO,
    count: 9,
    features: FEATURES,
    productIds: {
      [MONTH]: {
        [PRICE_MIN]: 551699,
        [PRICE_AVERAGE]: 551702,
        [PRICE_MAX]: 551705,
      },
      [YEAR]: {
        [PRICE_MIN]: 551708,
        [PRICE_AVERAGE]: 551711,
        [PRICE_MAX]: 551714,
      },
    },
    title: 'PRO',
  },
  {
    id: PLAN_AGENCY,
    count: 45,
    features: FEATURES,
    productIds: {
      [MONTH]: {
        [PRICE_MIN]: 551700,
        [PRICE_AVERAGE]: 551703,
        [PRICE_MAX]: 551706,
      },
      [YEAR]: {
        [PRICE_MIN]: 551709,
        [PRICE_AVERAGE]: 551712,
        [PRICE_MAX]: 551715,
      },
    },
    title: 'AGENCY',
  },
];
