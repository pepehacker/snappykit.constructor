import { ICON } from '../components/Item';

export default (websiteId: string): Array => ([
  { icon: ICON.TEMPLATES, id: 1, title: 'Templates', to: `/${websiteId}/editor/templates` },
  { icon: ICON.TEXT, id: 2, title: 'Text', to: `/${websiteId}/editor/text` },
  { icon: ICON.ICON, id: 3, title: 'Icon', to: `/${websiteId}/editor/icon` },
  { icon: ICON.SCREENSHOTS, id: 4, title: 'Screenshots', to: `/${websiteId}/editor/screenshots` },
  { icon: ICON.SMARTPHONE, id: 5, title: 'Smartphone', to: `/${websiteId}/editor/smartphone` },
  { icon: ICON.STORE, id: 6, title: 'Store', to: `/${websiteId}/editor/store` },
  { icon: ICON.BACKGROUND, id: 7, title: 'Background', to: `/${websiteId}/editor/background` },
  { icon: ICON.SOCIAL, id: 8, title: 'Social Networks', to: `/${websiteId}/editor/social` },
  { icon: ICON.DOMAIN, id: 9, title: 'Domain', to: `/${websiteId}/domain` },
]);
