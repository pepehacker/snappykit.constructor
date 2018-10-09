import { ICON } from '../components/Item';

export default (websiteId: string): Array => ([
  { icon: ICON.TEMPLATES, title: 'Templates', to: `/${websiteId}/editor/templates` },
  { icon: ICON.TEXT, title: 'Text', to: `/${websiteId}/editor/text` },
  { icon: ICON.ICON, title: 'Icon', to: `/${websiteId}/editor/icon` },
  { icon: ICON.SCREENSHOTS, title: 'Screenshots', to: `/${websiteId}/editor/screenshots` },
  { icon: ICON.SMARTPHONE, title: 'Smartphone', to: `/${websiteId}/editor/smartphone` },
  { icon: ICON.STORE, title: 'Store', to: `/${websiteId}/editor/store` },
  { icon: ICON.BACKGROUND, title: 'Background', to: `/${websiteId}/editor/background` },
  { icon: ICON.SOCIAL, title: 'Social Networks', to: `/${websiteId}/editor/social` },
  { icon: ICON.DOMAIN, title: 'Domain', to: `/${websiteId}/domain` },
]);
