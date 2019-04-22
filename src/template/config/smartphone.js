import { get, values } from 'lodash';
import { object, string } from 'yup';

export const SMARTPHONE = 'smartphone';

// Mockups
export const SMARTPHONE_MOCKUP = {
  // IPHONE
  CLASSIC_GRAY: 'classic-gray',
  CLASSIC_GOLD: 'classic-gold',
  CLASSIC_SILVER: 'classic-silver',

  CONCEPT_GRAY_GLASS: 'concept-gray-glass',
  CONCEPT_GRAY_LINE: 'concept-gray-line',
  CONCEPT_GOLD_GLASS: 'concept-gold-glass',
  CONCEPT_GOLD_LINE: 'concept-gold-line',
  CONCEPT_SILVER_GLASS: 'concept-silver-glass',
  CONCEPT_SILVER_LINE: 'concept-silver-line',

  FLAT_GRAY: 'flat-gray',
  FLAT_GOLD: 'flat-gold',
  FLAT_SILVER: 'flat-silver',

  // PIXEL
  CLASSIC_BLACK: 'classic-black',
  CLASSIC_BLUE: 'classic-blue',
  CLASSIC_WHITE: 'classic-white',

  CONCEPT_BLACK_GLASS: 'concept-black-glass',
  CONCEPT_BLACK_LINE: 'concept-black-line',
  CONCEPT_BLUE_GLASS: 'concept-blue-glass',
  CONCEPT_BLUE_LINE: 'concept-blue-line',
  CONCEPT_WHITE_GLASS: 'concept-white-glass',
  CONCEPT_WHITE_GLASS_2: 'concept-white-glass-2',
  CONCEPT_WHITE_LINE: 'concept-white-line',

  FLAT_BLACK: 'flat-black',
  FLAT_BLUE: 'flat-blue',
  FLAT_WHITE: 'flat-white',
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

// Schema
export const SMARTPHONE_SCHEMA = (defaults: Object): Object =>
  object().shape({
    mockup: string()
      .matches(
        new RegExp(`/^(${values(SMARTPHONE_MOCKUP).join('|')})$/`),
        'Incorrect `SMARTPHONE` ID!',
      )
      .default(get(defaults, 'mockup', SMARTPHONE_MOCKUP.FLAT_SILVER)),
    model: string()
      .matches(
        new RegExp(`/^(${values(SMARTPHONE_MODEL).join('|')})$/`),
        'Incorrect `SMARTPHONE MODEL` ID!',
      )
      .default(get(defaults, 'model', SMARTPHONE_MODEL.IPHONE)),
    style: string()
      .matches(
        new RegExp(`/^(${values(SMARTPHONE_STYLE).join('|')})$/`),
        'Incorrect `SMARTPHONE STYLE` ID!',
      )
      .default(get(defaults, 'style', SMARTPHONE_STYLE.FLAT)),
  });
