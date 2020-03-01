import * as React from 'react';

// Styles
import styles from './Section.scss';

// Template
import { Background, TemplateContext, VIEW } from 'template';

const Template6Section = ({ children, id }) => (
  <TemplateContext.Consumer>
    {({ size, view = VIEW.DESKTOP }) => (
      <div className={styles.Root} style={{ ...size }}>
        <Background
          classNames={{
            root: styles.Wrapper,
            container: styles.WrapperContainer,
          }}
          id={`${id}_background`}
        >
          {children}
        </Background>
      </div>
    )}
  </TemplateContext.Consumer>
);

export default Template6Section;
