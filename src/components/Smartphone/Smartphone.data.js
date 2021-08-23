import { GALAXY_S20_COLOR } from './models/GalaxyS20';
import { IPHONE_12_COLOR } from './models/IPhone12';
import { IPHONE_12_PRO_COLOR } from './models/IPhone12Pro';
import { PIXEL_COLOR } from './models/Pixel';

export const SMARTPHONE_MODEL = {
  IPHONE_12: 'IPHONE_12',
  IPHONE_12_PRO: 'IPHONE_12_PRO',
  GALAXY_S20: 'GALAXY_S20',
  PIXEL_4: 'PIXEL_4'
};

export const SMARTPHONE_STYLE = {
  FLAT: 'FLAT'
};

export const SMARTPHONE_COLOR = {
  [SMARTPHONE_MODEL.GALAXY_S20]: GALAXY_S20_COLOR,
  [SMARTPHONE_MODEL.IPHONE_12]: IPHONE_12_COLOR,
  [SMARTPHONE_MODEL.IPHONE_12_PRO]: IPHONE_12_PRO_COLOR,
  [SMARTPHONE_MODEL.PIXEL_4]: PIXEL_COLOR
};
