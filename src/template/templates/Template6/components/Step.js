import * as React from 'react';

// Components
import Section from './Section';

// Styles
import styles from '../Template6.scss';

// Template
import {
  // Components
  Screenshots,
  Text,
} from 'template';

const Template6Step = ({ id }) => (
  <Section id={id}>
    <div className={styles.Step}>
      <div className={styles.StepInfo}>
        <Text
          classNames={{ root: styles.Number, text: styles.NumberText }}
          id={`${id}_number`}
        />

        <Text
          classNames={{
            root: styles.SubTitle,
            text: styles.SubTitleText,
          }}
          id={`${id}_subtitle`}
        />

        <Text
          classNames={{ root: styles.Title, text: styles.TitleText }}
          id={`${id}_title`}
        />

        <Text
          classNames={{
            root: styles.Description,
            text: styles.DescriptionText,
          }}
          id={`${id}_description`}
        />
      </div>
    </div>
  </Section>
);

export default Template6Step;
