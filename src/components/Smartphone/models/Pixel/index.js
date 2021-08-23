import React from 'react';

// Styles
import Flat, { PIXEL_FLAT_COLOR } from './Flat';

const SmartphonePixel = ({ color, src, style = 'FLAT' }) => (
  <Flat color={color} src={src} />
);

export default SmartphonePixel;

export const PIXEL_COLOR = {
  FLAT: PIXEL_FLAT_COLOR
};
