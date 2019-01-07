import { get } from 'lodash';
import tinycolor from 'tinycolor2';

export const colorFormat = (value: string = '#fff'): Object => {
  const color = tinycolor(value);
  const hsl = color.toHsl();

  return {
    hex: color.toHexString(),
    color: {
      ...hsl,
      s: get(hsl, 's') === 0 ? 0.05 : get(hsl, 's'),
      l: get(hsl, 'l') === 1 ? 0.99 : get(hsl, 'l'),
    },
    hsl: {
      ...hsl,
      s: get(hsl, 's') === 0 ? 0.05 : get(hsl, 's'),
      l: get(hsl, 'l') === 1 ? 0.99 : get(hsl, 'l'),
    },
    hsv: color.toHsv(),
    rgb: color.toRgb(),
  };
};

export const colorParse = (colorObject: Object): string => {
  const color = tinycolor(get(colorObject, 'rgb', '#fff'));
  return color.toRgbString();
};
