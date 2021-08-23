import React from 'react';

// Styles
import Flat, { IPHONE_12_FLAT_COLOR } from './Flat';

const SmartphoneIPhone12 = ({ color, src, style = 'FLAT' }) => (
  <Flat color={color} src={src} />
);

export default SmartphoneIPhone12;

export const IPHONE_12_COLOR = {
  FLAT: IPHONE_12_FLAT_COLOR
};
