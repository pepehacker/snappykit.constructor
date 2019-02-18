import React, { Fragment } from 'react';

// Entities
import { VIEW } from 'entities/template/constants';

// Views
import Desktop from './views/Desktop';
import Mobile from './views/Mobile';
import Tablet from './views/Tablet';

const Template1 = ({
  isEditor = true,
  style,
  view = VIEW.DESKTOP,
}) => (
  <Fragment>
    {view === VIEW.DESKTOP && <Desktop style={style} />}
    {view === VIEW.MOBILE && <Mobile style={style} />}
    {view === VIEW.TABLET && <Tablet style={style} />}
  </Fragment>
);

export const Component = Template1;
export { default as config } from './config';
export { default as preview } from './assets/preview.jpg';
