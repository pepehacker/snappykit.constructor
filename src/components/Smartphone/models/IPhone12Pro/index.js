import React from 'react';

// Styles
import Flat from './Flat';

const SmartphoneIPhone12 = ({ color, src, style = 'FLAT' }) => (
  <Flat color={color} src={src} />
);

export default SmartphoneIPhone12;
export * from './Flat';
