// Views
import Background from 'views/Background';
import Icon from 'views/Icon';
import Screenshots from 'views/Screenshots';
import Smartphone from 'views/Smartphone';
import Social from 'views/Social';
import Store from 'views/Store';
import Templates from 'views/Templates';
import Text from 'views/Text';

export default [
  {
    Component: Background,
    id: 'background',
    path: '/background',
  },
  {
    Component: Icon,
    id: 'icon',
    path: '/icon',
  },
  {
    Component: Screenshots,
    id: 'screenshots',
    path: '/screenshots',
  },
  {
    Component: Smartphone,
    id: 'smartphone',
    path: '/smartphone',
  },
  {
    Component: Social,
    id: 'social',
    path: '/social',
  },
  {
    Component: Store,
    id: 'store',
    path: '/store',
  },
  {
    Component: Templates,
    id: 'templates',
    path: '/templates',
  },
  {
    Component: Text,
    id: 'text',
    path: '/text/:fieldId',
  },
  {
    Component: Text,
    id: 'text-redirect',
    path: '/text',
  },
];
