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
  DESCRIPTION,
  TITLE,
  VIEW,
} from 'entities/template/constants';

// Styles
import styles from './Mobile.scss';

const Template1Mobile = ({ style }) => (
  <div className={styles.Root} style={style}>
    <header className={styles.Header}>
      <Icon className={styles.Icon} view={VIEW.MOBILE} />
      <Policy className={styles.Policy} view={VIEW.MOBILE} />
    </header>

    <div className={styles.Container}>
      <div className={styles.Slider}>
        <Smartphone
          className={styles.Smartphone}
          classNames={{
            container: styles.Screenshots,
          }}
          view={VIEW.MOBILE}
        >
          <Screenshots
            classNames={{
              item: styles.ScreenshotsItem,
            }}
            view={VIEW.MOBILE}
          />
        </Smartphone>
      </div>

      <Text
        className={styles.Title}
        id={TITLE}
        view={VIEW.MOBILE}
      />

      <Text
        className={styles.Description}
        id={DESCRIPTION}
        view={VIEW.MOBILE}
      />

      <Store
        className={styles.Store}
        view={VIEW.MOBILE}
      />
    </div>

    <footer className={styles.Footer}>
      <Social
        className={styles.Social}
        view={VIEW.MOBILE}
      />
    </footer>
  </div>
);

export default Template1Mobile;
