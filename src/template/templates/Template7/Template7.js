import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Template7.scss';

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
  BACKGROUND,
  COPYRIGHT,
  DESCRIPTION,
  TITLE,
  VIEW
} from 'template';

const Template7 = () => (
  <TemplateContext.Consumer>
    {({ size, view = VIEW.DESKTOP }) => (
      <div
        className={classNames(styles.Root, {
          [styles.RootVariantLaptop]:
            view === VIEW.DESKTOP || view === VIEW.DESKTOP_LARGE,
          [styles.RootVariantMobile]: view === VIEW.MOBILE,
          [styles.RootVariantTablet]: view === VIEW.TABLET
        })}
      >
        <Background
          classNames={{ root: styles.Intro, container: styles.IntroContainer }}
          id={BACKGROUND}
        >
          <header className={styles.Header}>
            <Icon classNames={{ icon: styles.HeaderIcon }} />

            <div className={styles.HeaderRight}>
              <Policy className={styles.Policy} />
              <Social />
            </div>
          </header>

          <div className={styles.Wrapper} style={{ height: size.height }}>
            <Smartphone
              classNames={{
                root: styles.Smartphone,
                container: styles.SmartphoneContainer
              }}
              id="intro_smartphone"
            >
              <Screenshots id="intro_screenshots" />
            </Smartphone>

            <div className={styles.Content}>
              <Text
                classNames={{
                  root: styles.Slogan,
                  text: styles.SloganText
                }}
                id="intro_slogan"
              />

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
          </div>
        </Background>

        <div className={styles.Common}>
          <div className={classNames(styles.About, styles.Wrapper)}>
            <Text
              classNames={{
                root: styles.Slogan,
                text: styles.SloganText
              }}
              id="about_slogan"
            />

            <Text
              classNames={{
                root: styles.Title,
                text: styles.TitleText
              }}
              id="about_title"
            />

            <Text
              classNames={{
                root: styles.Description,
                text: styles.DescriptionText
              }}
              id="about_text"
            />
          </div>

          <div className={styles.Hr} />

          <div className={classNames(styles.Preview, styles.Wrapper)}>
            <Smartphone
              classNames={{
                root: styles.Smartphone,
                container: styles.SmartphoneContainer
              }}
              id="preview_smartphone"
            >
              <Screenshots id="preview_screenshots" />
            </Smartphone>

            <div className={styles.Content}>
              <Text
                classNames={{
                  root: styles.Slogan,
                  text: styles.SloganText
                }}
                id="preview_slogan"
              />

              <Text
                classNames={{
                  root: styles.Title,
                  text: styles.TitleText
                }}
                id="preview_title"
              />

              <div className={styles.PreviewGrid}>
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className={styles.PreviewItem}>
                    <Text
                      classNames={{
                        root: styles.PreviewTitle,
                        text: styles.PreviewTitleText
                      }}
                      id={`preview_${index}_title`}
                    />

                    <Text
                      classNames={{
                        root: styles.PreviewDescription,
                        text: styles.PreviewDescriptionText
                      }}
                      id={`preview_${index}_description`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.Hr} />

          <div className={classNames(styles.Quote, styles.Wrapper)}>
            <Text
              classNames={{
                root: styles.QuoteTitle,
                text: styles.QuoteTitleText
              }}
              id="quote_title"
            />

            <Text
              classNames={{
                root: styles.QuoteAuthor,
                text: styles.QuoteAuthorText
              }}
              id="quote_author"
            />
          </div>

          <div className={styles.Hr} />

          <div className={classNames(styles.Download, styles.Wrapper)}>
            <div className={styles.Content}>
              <Text
                classNames={{
                  root: styles.Title,
                  text: styles.TitleText
                }}
                id="download_title"
              />

              <Text
                classNames={{
                  root: styles.Description,
                  text: styles.DescriptionText
                }}
                id="download_description"
              />

              <Store className={styles.Store} id="download_store" />
            </div>

            <Smartphone
              classNames={{
                root: styles.Smartphone,
                container: styles.SmartphoneContainer
              }}
              id="download_smartphone"
            >
              <Screenshots id="download_screenshots" />
            </Smartphone>
          </div>

          <footer className={styles.Footer}>
            <div className={styles.Wrapper}>
              <Text
                classNames={{
                  root: styles.Coopyright,
                  text: styles.CopyrightText
                }}
                id={COPYRIGHT}
              />

              <Policy />
            </div>
          </footer>
        </div>
      </div>
    )}
  </TemplateContext.Consumer>
);

export default Template7;
