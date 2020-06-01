// @flow
import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from '../Background.scss';

// Template
import {
  BACKGROUND_COLOR,
  BACKGROUND_GRADIENT,
  BACKGROUND_IMAGE
} from 'template';

const createIconClassName: Function = (
  className: string,
  isSelected: boolean
): string =>
  classNames(styles.Icon, className, {
    [styles.IconIsSelected]: isSelected
  });

export default [
  {
    id: BACKGROUND_IMAGE,
    children: ({ isSelected }): React.Element<'div'> => (
      <div
        className={createIconClassName(styles.IconVariantImage, isSelected)}
      />
    )
  },
  {
    id: BACKGROUND_COLOR,
    children: ({ isSelected }): React.Element<'div'> => (
      <div
        className={createIconClassName(styles.IconVariantColor, isSelected)}
      />
    )
  },
  {
    id: BACKGROUND_GRADIENT,
    children: ({ isSelected }): React.Element<'div'> => (
      <div
        className={createIconClassName(styles.IconVariantGradient, isSelected)}
      />
    )
  }
];
