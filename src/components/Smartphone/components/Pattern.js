import React from 'react';

const SmartphonePattern = ({ src }) => (
  <defs>
    <pattern
      height="100%"
      id="image"
      patternUnits="userSpaceOnUse"
      width="100%"
    >
      <image height="100%" href={src} width="100%" />
    </pattern>
  </defs>
);

export default SmartphonePattern;
