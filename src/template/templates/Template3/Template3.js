import classNames from 'classnames';
import * as React from 'react';

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
import styles from './Template3.scss';

const Template3 = () => (
  <TemplateContext.Consumer>
    {({ view = VIEW.DESKTOP }) => {
      const rootClassNames = classNames(styles.Root, {
        [styles.RootVariantDesktop]: view === VIEW.DESKTOP,
        [styles.RootVariantMobile]: view === VIEW.MOBILE,
        [styles.RootVariantTablet]: view === VIEW.TABLET,
      });

      return (
        <div className={rootClassNames}>
          <header className={styles.Header}>
            <Icon classNames={{ icon: styles.Icon }} />
            <Social className={styles.Social} />
          </header>

          <div className={styles.Body}>
            <Background
              classNames={{
                root: styles.Background,
                container: styles.Container,
              }}
            >
              <div className={styles.Wrapper}>
                <div className={styles.Content}>
                  <Text
                    classNames={{
                      root: styles.Title,
                      text: styles.TitleText,
                    }}
                    id={TITLE}
                  />

                  <div className={styles.DescriptionWrapper}>
                    <Text
                      classNames={{
                        root: styles.Description,
                        text: styles.DescriptionText,
                      }}
                      id={DESCRIPTION}
                    />
                  </div>

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
            </Background>

            <Background className={styles.Blur} />
          </div>

          <footer className={styles.Footer}>
            <Text classNames={{ text: styles.CopyrightText }} id={COPYRIGHT} />
            <Policy className={styles.Policy} />
          </footer>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

export default Template3;
