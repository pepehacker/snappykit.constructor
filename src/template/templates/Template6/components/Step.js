import classNames from 'classnames';
import * as React from 'react';

// Components
import Section from './Section';

// Styles
import styles from './Step.scss';
import commonStyles from '../Template6.scss';

// Template
import {
  // Components
  Screenshots,
  Text,
} from 'template';

const Template6Step = ({ id, reversed }) => (
  <Section id={id}>
    <div
      className={classNames(styles.Root, { [styles.RootIsReversed]: reversed })}
    >
      <Screenshots
        classNames={{ root: styles.Screenshots }}
        id={`${id}_screenshots`}
        variant="solo"
      />

      <div className={styles.Info}>
        <Text
          classNames={{ root: styles.Number, text: styles.NumberText }}
          id={`${id}_number`}
        />

        <Text
          classNames={{
            root: commonStyles.SubTitle,
            text: commonStyles.SubTitleText,
          }}
          id={`${id}_subtitle`}
        />

        <Text
          classNames={{
            root: commonStyles.Title,
            text: commonStyles.TitleText,
          }}
          id={`${id}_title`}
        />

        <Text
          classNames={{
            root: classNames(styles.Description, commonStyles.Description),
            text: commonStyles.DescriptionText,
          }}
          id={`${id}_description`}
        />
      </div>
    </div>
  </Section>
);

export default Template6Step;
