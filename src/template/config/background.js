/* eslint-disable */
// @flow
import { get } from 'lodash';
import { object, number, string } from 'yup';

// Text
import { TEXT_COLOR } from './text';

type BackgroundDataType = {
  color: string,
  gradient: {
    angle: number,
    from: string,
    to: string,
  },
  image: string,
};

export const BACKGROUND = 'background';

export const BACKGROUND_COLOR = 'color';
export const BACKGROUND_GRADIENT = 'gradient';
export const BACKGROUND_IMAGE = 'image';

export const BACKGROUND_LIST = [
  require('assets/backgrounds/d-1.png'),
  require('assets/backgrounds/d-2.png'),
  require('assets/backgrounds/d-3.png'),
  require('assets/backgrounds/d-4.png'),
  require('assets/backgrounds/w-1.png'),
  require('assets/backgrounds/w-2.png'),
  require('assets/backgrounds/w-3.png'),
  require('assets/backgrounds/w-4.png'),
];

export const BACKGROUND_SCHEMA = (data: BackgroundDataType): object =>
  object().shape({
    [BACKGROUND_COLOR]: string()
      .matches(TEXT_COLOR.regex, 'Incorrect `COLOR`!')
      .default(get(data, 'color', 'rgba(255, 255, 255, 1)')),
    [BACKGROUND_GRADIENT]: object().shape({
      angle: number()
        .lessThan(360, 'Incorrect gradient angle! Must be less than 360!')
        .moreThan(0, 'Incorrect gradient angle! Must be more than 0!')
        .default(get(data, 'gradient.angle', 90)),
      from: string()
        .matches(TEXT_COLOR.regex, 'Incorrect gradient `COLOR`!')
        .default(get(data, 'gradient.from', 'rgba(255, 255, 255, 1)')),
      to: string()
        .matches(TEXT_COLOR.regex, 'Incorrect gradient `COLOR`!')
        .default(get(data, 'gradient.to', 'rgba(255, 255, 255, 1)')),
    }),
    [BACKGROUND_IMAGE]: string().default(get(data, 'image', null)),
  });
