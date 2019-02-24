import React from 'react';
import { compose, withProps } from 'recompose';

// Entities
import { VIEW } from 'entities/template/constants';

// Templates
import Template, {
  createTemplateData,
  getTemplateById,
  TemplateContext,
} from 'template';

const Sandbox = ({
  data,
  templateId,
  view = VIEW.MOBILE,
}) => (
  <TemplateContext.Provider
    value={{
      data, view,
      // isEditor: true,
      websiteId: 'sandbox',
    }}
  >
    <Template id={1} style={{ height: '100vh', width: '100vw' }}/>
  </TemplateContext.Provider>
);

export default compose(
  withProps((): Object => {
    const template = getTemplateById(1);

    return {
      data: createTemplateData({
        policy: {
          items: {
            'privacy': '123',
            'terms': '123',
          },
        },
        social: {
          items: {
            'facebook': '123',
            'twitter': '123',
            'instagram': '123',
          },
        },
        store: {
          items: {
            'apple': '123',
          },
        },
      }, template.config),
    };
  }),
)(Sandbox);
