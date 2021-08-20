import React, { useMemo } from 'react';

// Data
import { SMARTPHONE_MODEL } from './Smartphone.data';

// Models
import GalaxyS20 from './models/GalaxyS20';
import IPhone12 from './models/IPhone12';
import IPhone12Pro from './models/IPhone12Pro';
import Pixel from './models/Pixel';

const Smartphone = ({ model, ...props }) =>
  useMemo(() => {
    switch (model) {
      case SMARTPHONE_MODEL.IPHONE_12:
        return <IPhone12 {...props} />;
      case SMARTPHONE_MODEL.IPHONE_12_PRO:
        return <IPhone12Pro {...props} />;
      case SMARTPHONE_MODEL.GALAXY_S20:
        return <GalaxyS20 {...props} />;
      case SMARTPHONE_MODEL.PIXEL_4:
        return <Pixel {...props} />;
      default:
        return null;
    }
  }, [model, props]);

export default Smartphone;
