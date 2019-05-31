import { get } from 'lodash';
import * as React from 'react';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

// Template
import Template, { TemplateContext } from 'template';
import { VIEW } from 'template/config';

// Styles
import styles from './Sandbox.scss';

const TemplateSandbox = ({ app, view }) => (
  <div className={styles.Root}>
    <TemplateContext.Provider value={{ ...app, view }}>
      <Template id={get(app, 'templateId')} />
    </TemplateContext.Provider>
  </div>
);

export default compose(
  withState('view', 'setView', VIEW.DESKTOP),
  withHandlers({
    handleResize: ({ view, setView }): Function => () => {
      let newView;

      if (window.innerWidth < 768) {
        newView = VIEW.MOBILE;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        newView = VIEW.TABLET;
      } else if (window.innerWidth >= 1280 && window.innerWidth < 1920) {
        newView = VIEW.DESKTOP;
      } else {
        newView = VIEW.DESKTOP_LARGE;
      }

      newView !== view && setView(newView);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { handleResize } = this.props;

      handleResize();
      window.addEventListener('resize', handleResize);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.handleResize);
    },
  }),
)(TemplateSandbox);
