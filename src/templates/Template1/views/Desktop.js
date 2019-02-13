import React from 'react';

// Components
import {
  Background,
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
import styles from './Desktop.scss';

const Template1 = ({ style }) => (
  <Background className={styles.Root} style={style}>
    <div className={styles.Wrapper}>
      <header className={styles.Header}>
        <Icon view={VIEW.DESKTOP} />
        <Social view={VIEW.DESKTOP} />
      </header>

      <div className={styles.Container}>
        <div className={styles.Content}>
          <Text
            className={styles.Title}
            id={TITLE}
            view={VIEW.DESKTOP}
          />

          <Text
            className={styles.Description}
            id={DESCRIPTION}
            view={VIEW.DESKTOP}
          />

          <Store
            className={styles.Store}
            view={VIEW.DESKTOP}
          />
        </div>

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
      </div>

      <footer className={styles.Footer}>
        <Policy
          className={styles.Policy}
          view={VIEW.DESKTOP}
        />

        <Text
          className={styles.Copyright}
          id={COPYRIGHT}
          view={VIEW.DESKTOP}
        />
      </footer>
    </div>
  </Background>
);

export default Template1;
