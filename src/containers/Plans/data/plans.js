import {
  // Interval
  MONTH,
  YEAR,
  // Plans
  PLAN_AGENCY,
  PLAN_BASIC,
  PLAN_LITE,
  PLAN_PRO
} from '../ducks';

const FEATURES = [
  'All Lite plan features',
  'All website templates',
  'Custom domain',
  'Unlimited traffic',
  'No Snappykit’s brand ads',
  'Terms of use',
  'Privacy policy',
  'Add the second app link'
];

export default [
  {
    id: PLAN_LITE,
    count: 1,
    features: [
      'App website',
      '4 website templates',
      'Search from App Store',
      'Search from Google Play'
    ],
    productIds: 0,
    title: 'LITE'
  },
  {
    id: PLAN_BASIC,
    count: 3,
    features: FEATURES,
    productIds: {
      [MONTH]: 650296,
      [YEAR]: 650302
    },
    title: 'BASIC'
  },
  {
    id: PLAN_PRO,
    count: 9,
    features: FEATURES,
    productIds: {
      [MONTH]: 650297,
      [YEAR]: 650303
    },
    title: 'PRO'
  },
  {
    id: PLAN_AGENCY,
    count: 45,
    features: FEATURES,
    productIds: {
      [MONTH]: 650299,
      [YEAR]: 650304
    },
    title: 'AGENCY'
  }
];
