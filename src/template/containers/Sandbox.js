import { get, isEmpty } from 'lodash';
import * as React from 'react';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

// Api
import api from 'api';

// Template
import Template, { convertTemplateData, getTemplateById, TemplateContext } from 'template';
import { VIEW } from 'template/config';

const TemplateSandbox = ({ app, isLoaded, view }) => (
  <div
    style={{
      minHeight: '100vh',
      minWidth: '100vw',
    }}
  >
    <TemplateContext.Provider value={{ ...app, view }}>
      {isLoaded && <Template id={get(app, 'templateId')} />}
    </TemplateContext.Provider>
  </div>
);

export default compose(
  withState('app', 'setApp', {}),
  withState('isLoaded', 'setLoad', false),
  withState('view', 'setView', VIEW.DESKTOP),
  withHandlers({
    handleResize: ({ view, setView }): Function => () => {
      let newView;

      if (window.innerWidth < 768) {
        newView = VIEW.MOBILE;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        newView = VIEW.TABLET;
      } else {
        newView = VIEW.DESKTOP;
      }

      newView !== view && setView(newView);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { handleResize, setApp, setLoad } = this.props;

      const domain =
        window.location.hostname === 'localhost'
          ? 'sjimml.snappykit.com'
          : window.location.hostname;

      api('websites.getApp', { domain }).then(({ data: app }) => {
        try {
          const json = JSON.parse(get(app, 'json', ''));
          const template = getTemplateById(get(json, 'templateId', 1));

          const data = convertTemplateData(json, template.config);
          const isSupported = !isEmpty(data);

          setApp({
            data,
            isSupported,
            id: get(app, 'id'),
            description: get(app, 'description', ''),
            templateId: get(json, 'templateId', 1),
            title: get(app, 'title', 'Untitled'),
          });
          setLoad(true);
        } catch (e) {
          // eslint-disable-next-line
          console.error(`The template (${get(app, 'id')}) is not supported!`);
        }
      });

      handleResize();
      window.addEventListener('resize', handleResize);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.handleResize);
    },
  }),
)(TemplateSandbox);
