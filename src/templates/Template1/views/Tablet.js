import React from 'react';

// Components
import {
  Icon,
  Policy,
  Screenshots,
  Smartphone,
  Social,
  Store,
  Text,
} from 'components/Template';

// Entities
import {
  COPYRIGHT,
  DESCRIPTION,
  TITLE,
  VIEW,
} from 'entities/template/constants';

// Styles
import styles from './Tablet.scss';

const Template1Tablet = ({ style }) => (
  <div className={styles.Root} style={style}>
    <header className={styles.Header}>
      <Icon view={VIEW.TABLET} />
      <Social view={VIEW.TABLET} />
    </header>

    <div className={styles.Container}>
      <div className={styles.Slider}>
        <Smartphone
          className={styles.Smartphone}
          classNames={{
            container: styles.Screenshots,
          }}
          view={VIEW.DESKTOP}
        >
          <Screenshots
            classNames={{
              item: styles.ScreenshotsItem,
            }}
            view={VIEW.DESKTOP}
          />
        </Smartphone>
      </div>

      <div className={styles.Content}>
        <Text
          className={styles.Title}
          id={TITLE}
          view={VIEW.TABLET}
        />

        <Text
          className={styles.Description}
          id={DESCRIPTION}
          view={VIEW.TABLET}
        />

        <Store
          className={styles.Store}
          view={VIEW.TABLET}
        />
      </div>
    </div>

    <footer className={styles.Footer}>
      <Policy
        classNames={{
          root: styles.Policy,
          container: styles.PolicyContainer,
        }}
        view={VIEW.DESKTOP}
      />

      <Text
        className={styles.Copyright}
        id={COPYRIGHT}
        view={VIEW.DESKTOP}
      />
    </footer>
  </div>
);

export default Template1Tablet;
