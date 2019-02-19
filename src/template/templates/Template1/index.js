import React, { Fragment } from 'react';

// Entities
import { VIEW } from 'entities/template/constants';

// Template
import {
  TemplateContext
} from 'template';

// Views
import Desktop from './views/Desktop';
import Mobile from './views/Mobile';
import Tablet from './views/Tablet';

const Template1 = ({
  isEditor = true,
  style,
  view = VIEW.DESKTOP,
}) => (
  <TemplateContext.Consumer>
    {({ view }) => (
      <Fragment>
        {view === VIEW.DESKTOP && <Desktop />}
        {view === VIEW.MOBILE && <Mobile />}
        {view === VIEW.TABLET && <Tablet />}
      </Fragment>
    )}
  </TemplateContext.Consumer>
);

export const Component = Template1;
export { default as config, getExportData } from './config';
export { default as preview } from './assets/preview.jpg';
