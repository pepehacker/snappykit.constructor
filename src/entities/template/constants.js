export const COLOR = {
  regex: /^(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))$/,
};

export const FONT = {
  RALEWAY: 'Raleway',
  ROBOTO: 'Roboto',

  regex: /^(Raleway|Roboto)$/,
  values: ['Roboto', 'Raleway'],
};

// Smarthpone
export const SMARTPHONE = 'smartphone';

export const SMARTPHONE_MOCKUP = {
  CLASSIC_IPHONE_GRAY: 'classic-iphone-gray',
  CLASSIC_IPHONE_GOLD: 'classic-iphone-gold',
  CLASSIC_IPHONE_SILVER: 'classic-iphone-silver',

  CONCEPT_IPHONE_GRAY_GLASS: 'concept-iphone-gray-glass',
  CONCEPT_IPHONE_GRAY_LINE: 'concept-iphone-gray-line',
  CONCEPT_IPHONE_GOLD_GLASS: 'concept-iphone-gold-glass',
  CONCEPT_IPHONE_GOLD_LINE: 'concept-iphone-gold-line',
  CONCEPT_IPHONE_SILVER_GLASS: 'concept-iphone-silver-glass',
  CONCEPT_IPHONE_SILVER_LINE: 'concept-iphone-silver-line',

  FLAT_IPHONE_GRAY: 'flat-iphone-gray',
  FLAT_IPHONE_GOLD: 'flat-iphone-gold',
  FLAT_IPHONE_SILVER: 'flat-iphone-silver',
};

export const SMARTPHONE_MODEL = {
  IPHONE: 'iphone',
  PIXEL: 'pixel',
  values: [
    { label: 'iPhone', value: 'iphone' },
    { label: 'Pixel', value: 'pixel' },
  ],
};

export const SMARTPHONE_STYLE = {
  CLASSIC: 'classic',
  CONCEPT: 'concept',
  FLAT: 'flat',
  values: [
    { label: 'Classic', value: 'classic' },
    { label: 'Concept', value: 'concept' },
    { label: 'Flat', value: 'flat' },
  ],
};

export const STORE = 'store';
export const STORE_BACKGROUND = 'background';
export const STORE_COLOR = 'color';

export const STYLE = {
  LIGHT: '100',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '700',

  regex: /^(100|400|500|700)$/,
  values: [
    {
      label: 'light',
      value: '100',
    },
    {
      label: 'regular',
      value: '400',
    },
    {
      label: 'medium',
      value: '500',
    },
    {
      label: 'bold',
      value: '700',
    },
  ]
};

export const VIEW = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
};
