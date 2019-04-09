import classNames from 'classnames';
import React from 'react';

// Entities
import { COPYRIGHT, DESCRIPTION, TITLE, VIEW } from 'entities/template/constants';

// Template
import { Background, Icon, Policy, Social, Store, Text, TemplateContext } from 'template';

// Styles
import styles from './Template2.scss';

const Template2 = () => (
  <TemplateContext.Consumer>
    {({ view }) => {
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
            <div />
            <Policy className={styles.Policy} />
          </header>

          <div className={styles.Body}>
            <Icon classNames={{ icon: styles.Icon }} />

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

          <footer className={styles.Footer}>
            <Social />

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

export default Template2;
