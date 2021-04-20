import {
  // Interval
  MONTH,
  YEAR
} from '../ducks';

import {
  SUBSCRIPTION_AGENCY,
  SUBSCRIPTION_BASIC,
  SUBSCRIPTION_LITE,
  SUBSCRIPTION_PRO
} from 'services/session/constants';

const FEATURES = [
  'All Lite plan features',
  'All website templates',
  'Custom domain',
  'Unlimited traffic',
  'SEO settings',
  'All smartphones',
  'No Snappykit’s brand ads',
  'Add second app link'
];

export default [
  {
    id: SUBSCRIPTION_LITE,
    count: 1,
    features: [
      'App website',
      'Custom subdomain',
      '500 monthly visits',
      'SSL certificate',
      '4 website templates'
    ],
    productIds: 0,
    title: 'LITE'
  },
  {
    id: SUBSCRIPTION_BASIC,
    count: 1,
    features: FEATURES,
    productIds: {
      [MONTH]: 650296,
      [YEAR]: 650302
    },
    title: 'BASIC'
  },
  {
    id: SUBSCRIPTION_PRO,
    count: 3,
    features: FEATURES,
    productIds: {
      [MONTH]: 650297,
      [YEAR]: 650303
    },
    title: 'PRO'
  },
  {
    id: SUBSCRIPTION_AGENCY,
    count: 9,
    features: FEATURES,
    productIds: {
      [MONTH]: 650299,
      [YEAR]: 650304
    },
    title: 'AGENCY'
  }
];
