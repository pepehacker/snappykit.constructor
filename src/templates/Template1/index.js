import React, { Fragment } from 'react';

// Entities
import { VIEW } from 'entities/template/constants';

// Views
import Desktop from './views/Desktop';
import Mobile from './views/Mobile';

const Template1 = ({
  isEditor = true,
  style,
  view = VIEW.DESKTOP,
}) => (
  <Fragment>
    {view === VIEW.DESKTOP && <Desktop style={style} />}
    {view === VIEW.MOBILE && <Mobile style={style} />}
  </Fragment>
);

export const Component = Template1;
export { default as config } from './config';
