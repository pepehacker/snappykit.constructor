/* eslint-disable global-require */
import { get, values } from 'lodash';
import { object, string } from 'yup';

export const SMARTPHONE = 'smartphone';

// Model
export const SMARTPHONE_MODEL = {
  IPHONE_11: 'iphone-11',
  IPHONE_11_PRO: 'iphone-11-pro',
  IPHONE_SE: 'iphone-se',
  GALAXY_S20: 'galaxy-s20',
  PIXEL_4: 'pixel-4'
};

// Style
export const SMARTPHONE_STYLE = {
  DEFAULT: 'default',
  FLAT: 'flat',
  GLASS: 'glass',
  LINE: 'line'
};

// Mockups
export const SMARTPHONE_MOCKUP = {
  // Galaxy S20 Flat
  'galaxy-s20-flat-black': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/flat/black.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'galaxy-s20-flat-blue': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/flat/blue.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'galaxy-s20-flat-grey': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/flat/grey.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'galaxy-s20-flat-red': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/flat/red.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'galaxy-s20-flat-violet': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/flat/violet.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'galaxy-s20-flat-white': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/flat/white.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  // Galaxy S20 Flat end
  // Galaxy S20 Glass
  'galaxy-s20-glass-black': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/glass/black.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'galaxy-s20-glass-blue': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/glass/blue.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'galaxy-s20-glass-grey': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/glass/grey.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'galaxy-s20-glass-red': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/glass/red.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'galaxy-s20-glass-violet': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/glass/violet.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'galaxy-s20-glass-white': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/glass/white.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  // Galaxy S20 Glass End
  // Galaxy S20 Line
  'galaxy-s20-line-black': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/line/black.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'galaxy-s20-line-blue': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/line/blue.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'galaxy-s20-line-grey': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/line/grey.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'galaxy-s20-line-red': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/line/red.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'galaxy-s20-line-violet': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/line/violet.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'galaxy-s20-line-white': {
    model: SMARTPHONE_MODEL.GALAXY_S20,
    src: require('assets/mockup/galaxy-s20/line/white.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  // Galaxy S20 Line End
  // iPhone 11 Flat
  'iphone-11-flat-black': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/flat/black.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-flat-green': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/flat/green.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-flat-purple': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/flat/purple.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-flat-red': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/flat/red.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-flat-white': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/flat/white.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-flat-yellow': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/flat/yellow.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  // iPhone 11 Flat End
  // iPhone 11 Glass
  'iphone-11-glass-black': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/glass/black.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-glass-green': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/glass/green.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-glass-purple': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/glass/purple.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-glass-red': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/glass/red.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-glass-white': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/glass/white.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-glass-yellow': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/glass/yellow.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  // iPhone 11 Glass End
  // iPhone 11 Line
  'iphone-11-line-black': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/line/black.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-line-green': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/line/green.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-line-purple': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/line/purple.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-line-red': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/line/red.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-line-white': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/line/white.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-line-yellow': {
    model: SMARTPHONE_MODEL.IPHONE_11,
    src: require('assets/mockup/iphone-11/line/yellow.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  // iPhone 11 Line End
  // iPhone 11 Pro Flat
  'iphone-11-pro-flat-gold': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/flat/gold.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-pro-flat-midnight-green': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/flat/midnight-green.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-pro-flat-silver': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/flat/silver.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-11-pro-flat-space-gray': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/flat/space-gray.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  // iPhone 11 Pro Flat End
  // iPhone 11 Pro Glass
  'iphone-11-pro-glass-gold': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/glass/gold.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-pro-glass-midnight-green': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/glass/midnight-green.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-pro-glass-silver': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/glass/silver.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-11-pro-glass-space-gray': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/glass/space-gray.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  // iPhone 11 Pro Glass End
  // iPhone 11 Pro Line
  'iphone-11-pro-line-gold': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/line/gold.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-pro-line-midnight-green': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/line/midnight-green.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-pro-line-silver': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/line/silver.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-11-pro-line-space-gray': {
    model: SMARTPHONE_MODEL.IPHONE_11_PRO,
    src: require('assets/mockup/iphone-11-pro/line/space-gray.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  // iPhone 11 Pro Line End
  // iPhone SE Flat
  'iphone-se-flat-red': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/flat/red.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-se-flat-silver': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/flat/silver.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'iphone-se-flat-space-gray': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/flat/space-gray.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  // iPhone SE Flat End
  // iPhone SE Glass
  'iphone-se-glass-red': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/glass/red.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-se-glass-silver': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/glass/silver.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'iphone-se-glass-space-gray': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/glass/space-gray.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  // iPhone SE Glass End
  // iPhone SE Line
  'iphone-se-line-red': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/line/red.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-se-line-silver': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/line/silver.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'iphone-se-line-space-gray': {
    model: SMARTPHONE_MODEL.IPHONE_SE,
    src: require('assets/mockup/iphone-se/line/space-gray.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  // iPhone SE Line End
  // Pixel 4 Flat
  'pixel-4-flat-clearly-white': {
    model: SMARTPHONE_MODEL.PIXEL_4,
    src: require('assets/mockup/pixel-4/flat/clearly-white.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  'pixel-4-flat-just-black': {
    model: SMARTPHONE_MODEL.PIXEL_4,
    src: require('assets/mockup/pixel-4/flat/just-black.svg'),
    style: SMARTPHONE_STYLE.FLAT
  },
  // Pixel 4 Flat End
  // Pixel 4 Glass
  'pixel-4-glass-clearly-white': {
    model: SMARTPHONE_MODEL.PIXEL_4,
    src: require('assets/mockup/pixel-4/glass/clearly-white.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  'pixel-4-glass-just-black': {
    model: SMARTPHONE_MODEL.PIXEL_4,
    src: require('assets/mockup/pixel-4/glass/just-black.svg'),
    style: SMARTPHONE_STYLE.GLASS
  },
  // Pixel 4 Glass End
  // Pixel 4 Line
  'pixel-4-line-clearly-white': {
    model: SMARTPHONE_MODEL.PIXEL_4,
    src: require('assets/mockup/pixel-4/line/clearly-white.svg'),
    style: SMARTPHONE_STYLE.LINE
  },
  'pixel-4-line-just-black': {
    model: SMARTPHONE_MODEL.PIXEL_4,
    src: require('assets/mockup/pixel-4/line/just-black.svg'),
    style: SMARTPHONE_STYLE.LINE
  }
  // Pixel 4 Line End
};

// Schema
export const SMARTPHONE_SCHEMA = (defaults: Object): Object =>
  object().shape({
    mockup: string()
      .matches(
        new RegExp(`/^(${values(Object.keys(SMARTPHONE_MOCKUP)).join('|')})$/`),
        'Incorrect `SMARTPHONE` ID!'
      )
      .default(
        get(defaults, 'mockup', SMARTPHONE_MOCKUP['iphone-11-glass-black'])
      )
  });
