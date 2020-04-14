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
  COPYRIGHT,
  DESCRIPTION,
  TITLE,
  VIEW,
} from 'template';

const Template7 = () => (
  <TemplateContext.Consumer>
    {({ size, view = VIEW.DESKTOP }) => (
      <div
        className={classNames(styles.Root, {
          [styles.RootVariantLaptop]: view === VIEW.DESKTOP,
        })}
      >
        <Background
          classNames={{ root: styles.Intro, container: styles.IntroContainer }}
          id="intro_background"
        >
          <div className={styles.Wrapper} style={{ height: size.height }}>
            <Smartphone
              classNames={{
                root: styles.Smartphone,
                container: styles.SmartphoneContainer,
              }}
            >
              <Screenshots />
            </Smartphone>

            <div className={styles.Content}>
              <Text
                classNames={{
                  root: styles.Slogan,
                  text: styles.SloganText,
                }}
                id="intro_slogan"
              />

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
          </div>
        </Background>

        <Background
          classNames={{ container: styles.CommonContainer }}
          id="common_background"
        >
          <div className={classNames(styles.About, styles.Wrapper)}>
            <Text
              classNames={{
                root: styles.Slogan,
                text: styles.SloganText,
              }}
              id="about_slogan"
            />

            <Text
              classNames={{
                root: styles.Title,
                text: styles.TitleText,
              }}
              id="about_title"
            />

            <div className={styles.AboutList}>
              {[1, 2, 3].map((index) => (
                <Text
                  key={index}               
                  classNames={{
                    root: styles.Description,
                    text: styles.DescriptionText,
                  }} id={`about_text_${index}`}
                />
              ))}

            </div>
          </div>
        </Background>
      </div>
    )}
  </TemplateContext.Consumer>
);

export default Template7;
