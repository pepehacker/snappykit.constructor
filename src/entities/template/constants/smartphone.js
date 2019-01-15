export const SMARTPHONE = 'smartphone';

// Mockups
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

// Model
export const SMARTPHONE_MODEL = {
  IPHONE: 'iphone',
  PIXEL: 'pixel',
};

SMARTPHONE_MODEL.values = [
  { label: 'iPhone', value: SMARTPHONE_MODEL.IPHONE },
  { label: 'Pixel', value: SMARTPHONE_MODEL.PIXEL },
];

// Style
export const SMARTPHONE_STYLE = {
  CLASSIC: 'classic',
  CONCEPT: 'concept',
  FLAT: 'flat',
};

SMARTPHONE_STYLE.values = [
  { label: 'Classic', value: SMARTPHONE_STYLE.CLASSIC },
  { label: 'Concept', value: SMARTPHONE_STYLE.CONCEPT },
  { label: 'Flat', value: SMARTPHONE_STYLE.FLAT },
];
