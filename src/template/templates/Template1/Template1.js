import classNames from 'classnames';
import React from 'react';

// Template
import {
  // Components
  Background,
  Icon,
  Policy,
  Screenshots,
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

// Styles
import styles from './Template1.scss';

const Template1 = () => (
  <TemplateContext.Consumer>
    {({ view = VIEW.DESKTOP }) => {
      const rootClassNames = classNames(styles.Root, {
        [styles.RootVariantDesktop]: view === VIEW.DESKTOP,
        [styles.RootVariantMobile]: view === VIEW.MOBILE,
        [styles.RootVariantTablet]: view === VIEW.TABLET,
      });

      return (
        <Background
          classNames={{
            root: rootClassNames,
            container: styles.Container,
          }}
        >
          <header className={styles.Header}>
            <Icon classNames={{ icon: styles.Icon }} />
            <Social classNames={styles.Social} />
          </header>

          <div className={styles.Body}>
            <div className={styles.Content}>
              <Text
                classNames={{
                  root: styles.Title,
                  text: styles.TitleText,
                }}
                id={TITLE}
              />

              <Text
                classNames={{
                  root: styles.Description,
                  text: styles.DescriptionText,
                }}
                id={DESCRIPTION}
              />

              <Store className={styles.Store} />
            </div>

            <div className={styles.Slider}>
              <Smartphone
                classNames={{
                  root: styles.Smartphone,
                  container: styles.Screenshots,
                  mockup: styles.SmartphoneMockup,
                }}
              >
                <Screenshots classNames={{ item: styles.ScreenshotsItem }} />
              </Smartphone>
            </div>
          </div>

          <footer className={styles.Footer}>
            <Policy className={styles.Policy} />

            <Text
              classNames={{
                root: styles.Copyright,
                text: styles.CopyrightText,
              }}
              id={COPYRIGHT}
            />
          </footer>
        </Background>
      );
    }}
  </TemplateContext.Consumer>
);

export default Template1;
