import classNames from 'classnames';
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
  Screenshots,
  Smartphone,
  Social,
  Store,
  Text,
  TemplateContext,
  // Config
  BACKGROUND,
  COPYRIGHT,
  DESCRIPTION,
  TITLE,
  VIEW
} from 'template';

const Template6 = () => (
  <TemplateContext.Consumer>
    {({ isEditor, isFullscreen, view = VIEW.DESKTOP }) => (
      <div
        className={classNames(
          styles.Root,
          (isEditor || isFullscreen) && styles.RootWithScroll,
          {
            [styles.RootVariantDesktop]:
              view === VIEW.DESKTOP || view === VIEW.DESKTOP_LARGE,
            [styles.RootVariantMobile]: view === VIEW.MOBILE,
            [styles.RootVariantTablet]: view === VIEW.TABLET
          }
        )}
      >
        <Section backgroundId={BACKGROUND} id="intro">
          <header className={styles.Header}>
            <Icon classNames={{ icon: styles.HeaderIcon }} />
            <Policy className={styles.Policy} />
          </header>

          <div className={styles.Intro}>
            <div className={styles.Content}>
              <Text
                classNames={{
                  root: styles.Title,
                  text: styles.TitleText
                }}
                id={TITLE}
              />

              <Text
                classNames={{
                  root: styles.Description,
                  text: styles.DescriptionText
                }}
                id={DESCRIPTION}
              />

              <Store className={styles.Store} />
            </div>

            <Smartphone
              classNames={{
                root: styles.Smartphone,
                container: styles.SmartphoneContainer
              }}
            >
              <Screenshots classNames={{ root: styles.Screenshots }} />
            </Smartphone>
          </div>
        </Section>

        <Step id="step1" />
        <Step id="step2" reversed />
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
                text: styles.DescriptionText
              }}
              id="download_description"
            />

            <Store className={styles.Store} />

            <footer className={styles.Footer}>
              <Text
                classNames={{
                  root: styles.Coopyright,
                  text: styles.CopyrightText
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
