import React from 'react';

// Styles
import Flat, { IPHONE_12_PRO_FLAT_COLOR } from './Flat';

const SmartphoneIPhone12Pro = (props) => <Flat {...props} />;

export default SmartphoneIPhone12Pro;
export * from './Flat';

export const IPHONE_12_PRO_COLOR = {
  FLAT: IPHONE_12_PRO_FLAT_COLOR
};
