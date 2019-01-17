import React, { Fragment } from 'react';

// Entities
import { VIEW } from 'entities/template/constants';

// Views
import Desktop from './views/Desktop';
import Mobile from './views/Mobile';

const Template1 = ({
  isEditor = true,
  view = VIEW.DESKTOP,
}) => (
  <Fragment>
    {view === VIEW.DESKTOP && <Desktop />}
    {view === VIEW.MOBILE && <Mobile />}
  </Fragment>
);

export const Component = Template1;
export { default as config } from './config';
