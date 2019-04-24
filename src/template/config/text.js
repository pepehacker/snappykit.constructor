import { get, values } from 'lodash';
import { object, string } from 'yup';

export const TEXT = 'text';

// Color
export const TEXT_COLOR = {
  regex: /^(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))$/,
};

// Font
export const TEXT_FONT = {
  ALEGREYA: 'Alegreya',
  ALEGREYA_SANS: 'Alegreya Sans',
  BARLOW: 'Barlow',
  BARLOW_CONDENSED: 'Barlow Condensed',
  CORMORANT_GARAMOND: 'Cormorant Garamond',
  EB_GARAMOND: 'EB Garamond',
  EXO: 'Exo',
  FIRA_SANS: 'Fira Sans',
  FIRA_SANS_CONDENSED: 'Fira Sans Condensed',
  LATO: 'Lato',
  LIBRE_FRANKLIN: 'Libre Franklin',
  MONTSERRAT: 'Montserrat',
  MULI: 'Muli',
  NUNITO: 'Nunito',
  OVERPASS: 'Overpass',
  RALEWAY: 'Raleway',
  ROBOTO: 'Roboto',
  ROBOTO_CONDENSED: 'Roboto Condensed',
  SARABUN: 'Sarabun',
  SOURCE_SANS_PRO: 'Source Sans Pro',
};

export const TEXT_FONT_REGEX = new RegExp(`^(${values(TEXT_FONT).join('|')})$`);
export const TEXT_FONT_VALUES = values(TEXT_FONT);

// Style
export const TEXT_STYLE = {
  LIGHT: '100',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '700',
};

export const TEXT_STYLE_REGEX = new RegExp(`^(${values(TEXT_STYLE).join('|')})$`);

export const TEXT_STYLE_VALUES = [
  { label: 'light', value: TEXT_STYLE.LIGHT },
  { label: 'regular', value: TEXT_STYLE.REGULAR },
  { label: 'medium', value: TEXT_STYLE.MEDIUM },
  { label: 'bold', value: TEXT_STYLE.BOLD },
];

// Schema
export const TEXT_SCHEMA = (defaults: Object): Object =>
  object().shape({
    color: string()
      .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!')
      .default(get(defaults, 'color', 'rgba(255, 255, 255, 1)')),
    font: string()
      .matches(TEXT_FONT.regex, 'Incorrect `FONT` name!')
      .default(get(defaults, 'font', TEXT_FONT.ROBOTO)),
    style: string()
      .matches(TEXT_STYLE.regex, 'Incorrect `STYLE` value!')
      .default(get(defaults, 'style', TEXT_STYLE.REGULAR)),
    text: string().default(get(defaults, 'text', 'Text')),
  });
