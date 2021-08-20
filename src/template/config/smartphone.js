/* eslint-disable global-require */
import { get, values } from 'lodash';
import { object, string } from 'yup';

// Components
import { SMARTPHONE_MODEL, SMARTPHONE_STYLE } from 'components/Smartphone';

// Config
import { TEXT_COLOR } from './text';

export const SMARTPHONE = 'smartphone';

// Schema
export const SMARTPHONE_SCHEMA = (defaults) =>
  object().shape({
    color: string()
      .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!')
      .default(get(defaults, 'color', 'rgba(255, 255, 255, 1)')),
    model: string()
      .matches(
        new RegExp(`^(${values(SMARTPHONE_MODEL).join('|')})$`),
        'Incorrect `MODEL` name!'
      )
      .default(get(defaults, 'model', SMARTPHONE_MODEL.IPHONE_12)),
    style: string()
      .matches(
        new RegExp(`^(${values(SMARTPHONE_STYLE).join('|')})$`),
        'Incorrect `STYLE` value!'
      )
      .default(get(defaults, 'style', SMARTPHONE_STYLE.FLAT))
  });
