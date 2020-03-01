import * as React from 'react';

// Components
import Section from './components/Section';
import Step from './components/Step';

// Styles
import styles from './Template6.scss';

// Template
import {
  // Components
  Icon,
  Policy,
  Smartphone,
  Social,
  Store,
  Text,
  TemplateContext,
  // Config
  COPYRIGHT,
  DESCRIPTION,
  TITLE,
  VIEW,
} from 'template';

const Template6 = () => (
  <TemplateContext.Consumer>
    {({ size, view = VIEW.DESKTOP }) => (
      <div className={styles.Root}>
        <Step id="step1" />
        <Step id="step2" />
        <Step id="step3" />

        <Section id="download">
          <div className={styles.Download}>
            <Icon classNames={{ icon: styles.Icon }} />

            <Text
              classNames={{ root: styles.Title, text: styles.TitleText }}
              id="download_title"
            />

            <Text
              classNames={{
                root: styles.Description,
                text: styles.DescriptionText,
              }}
              id="download_description"
            />

            <Store className={styles.Store} />

            <footer className={styles.Footer}>
              <Text
                classNames={{
                  root: styles.Coopyright,
                  text: styles.CopyrightText,
                }}
                id={COPYRIGHT}
              />

              <Social />
            </footer>
          </div>
        </Section>
      </div>
    )}
  </TemplateContext.Consumer>
);

export default Template6;
