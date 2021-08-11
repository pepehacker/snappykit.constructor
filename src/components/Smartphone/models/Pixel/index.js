import React from 'react';

// Styles
import Flat from './Flat';

const SmartphonePixel = ({ color, src, style = 'FLAT' }) => (
  <Flat color={color} src={src} />
);

export default SmartphonePixel;
