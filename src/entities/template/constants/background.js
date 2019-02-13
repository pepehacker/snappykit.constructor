import { get } from 'lodash';
import { object, number, string } from 'yup';

// Text
import { TEXT_COLOR } from './text';

export const BACKGROUND = 'background';

export const BACKGROUND_SCHEMA = (defaults: Object): Object => object().shape({
  color: string()
    .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!')
    .default(get(defaults, 'color', 'rgba(255, 255, 255, 1)')),
  gradient: object().shape({
    angle: number()
      .lessThan(360, 'Incorrect gradient angle! Must be less than 360!')
      .moreThan(0, 'Incorrect gradient angle! Must be more than 0!')
      .default(get(defaults, 'gradient.angle', 90)),
    from: string()
      .matches(TEXT_COLOR.regex, 'Incorrect gradient `COLOR`!')
      .default(get(defaults, 'gradient.from', 'rgba(255, 255, 255, 1)')),
    to: string()
      .matches(TEXT_COLOR.regex, 'Incorrect gradient `COLOR`!')
      .default(get(defaults, 'gradient.to', 'rgba(255, 255, 255, 1)')),
  }),
});
