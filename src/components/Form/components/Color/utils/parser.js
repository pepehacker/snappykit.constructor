import { get } from 'lodash';
import tinycolor from 'tinycolor2';

export const colorFormat = (value: string = '#fff'): Object => {
  const color = tinycolor(value);

  return {
    hex: color.toHexString(),
    color: color.toHsl(),
    hsl: color.toHsl(),
    hsv: color.toHsv(),
    rgb: color.toRgb(),
  };
};

export const colorParse = (colorObject: Object): string => {
  const color = tinycolor(get(colorObject, 'rgb', '#fff'));
  return color.toRgbString();
};
