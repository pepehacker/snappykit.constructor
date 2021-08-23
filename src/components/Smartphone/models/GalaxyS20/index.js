import React from 'react';

// Styles
import Flat, { GALAXY_S20_FLAT_COLOR } from './Flat';

const SmartphoneGalaxyS20 = ({ color, src, style = 'FLAT' }) => (
  <Flat color={color} src={src} />
);

export default SmartphoneGalaxyS20;

export const GALAXY_S20_COLOR = {
  FLAT: GALAXY_S20_FLAT_COLOR
};
