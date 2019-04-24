// Entities
import { SMARTPHONE_MOCKUP, SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'template/config';

export const SMARTPHONE_FORM_ID = 'smartphoneForm';

export const MOCKUP_ITEMS = {
  [SMARTPHONE_MODEL.IPHONE]: {
    [SMARTPHONE_STYLE.CLASSIC]: [
      SMARTPHONE_MOCKUP.CLASSIC_SILVER,
      SMARTPHONE_MOCKUP.CLASSIC_GRAY,
      SMARTPHONE_MOCKUP.CLASSIC_GOLD,
    ],
    [SMARTPHONE_STYLE.CONCEPT]: [
      SMARTPHONE_MOCKUP.CONCEPT_SILVER_GLASS,
      SMARTPHONE_MOCKUP.CONCEPT_SILVER_LINE,
      SMARTPHONE_MOCKUP.CONCEPT_GRAY_GLASS,
      SMARTPHONE_MOCKUP.CONCEPT_GRAY_LINE,
      SMARTPHONE_MOCKUP.CONCEPT_GOLD_GLASS,
      SMARTPHONE_MOCKUP.CONCEPT_GOLD_LINE,
    ],
    [SMARTPHONE_STYLE.FLAT]: [
      SMARTPHONE_MOCKUP.FLAT_SILVER,
      SMARTPHONE_MOCKUP.FLAT_GRAY,
      SMARTPHONE_MOCKUP.FLAT_GOLD,
    ],
  },
  [SMARTPHONE_MODEL.PIXEL]: {
    [SMARTPHONE_STYLE.CLASSIC]: [
      SMARTPHONE_MOCKUP.CLASSIC_WHITE,
      SMARTPHONE_MOCKUP.CLASSIC_BLACK,
      SMARTPHONE_MOCKUP.CLASSIC_BLUE,
    ],
    [SMARTPHONE_STYLE.CONCEPT]: [
      SMARTPHONE_MOCKUP.CONCEPT_WHITE_GLASS,
      SMARTPHONE_MOCKUP.CONCEPT_WHITE_LINE,
      SMARTPHONE_MOCKUP.CONCEPT_BLACK_GLASS,
      SMARTPHONE_MOCKUP.CONCEPT_BLACK_LINE,
      SMARTPHONE_MOCKUP.CONCEPT_BLUE_GLASS,
      SMARTPHONE_MOCKUP.CONCEPT_BLUE_LINE,
      SMARTPHONE_MOCKUP.CONCEPT_WHITE_GLASS_2,
    ],
    [SMARTPHONE_STYLE.FLAT]: [
      SMARTPHONE_MOCKUP.FLAT_BLACK,
      SMARTPHONE_MOCKUP.FLAT_BLUE,
      SMARTPHONE_MOCKUP.FLAT_WHITE,
    ],
  },
};