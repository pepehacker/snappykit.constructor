import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color } from 'components/Form';
import Tabs, { Tab } from 'components/Tabs';

import Gradient from '../components/Gradient';
import Image from '../components/Image';

// Entities
import { updateTemplate } from 'entities/template/actions';
import {
  BACKGROUND,
  BACKGROUND_COLOR,
  BACKGROUND_GRADIENT,
  BACKGROUND_IMAGE,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Form.scss';

const BackgroundForm = ({
  category,
  tab,

  // Handlers
  handleChange,
  handleSubmit,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootVariantColor]: tab === BACKGROUND_COLOR,
    [styles.RootVariantGradient]: tab === BACKGROUND_GRADIENT,
    [styles.RootVariantImage]: tab === BACKGROUND_IMAGE,
  });

  return (
    <Form
      className={rootClassNames}
      onSubmit={handleSubmit}
    >
      <div className={styles.TabsWrapper}>
        <Tabs
          className={styles.Tabs}
          onChange={handleChange}
          value={tab}
        >
          <Tab value={BACKGROUND_IMAGE}>
            {({ isSelected }) => (
              <div
                className={classNames(styles.Icon, styles.IconVariantImage, {
                  [styles.IconIsSelected]: isSelected,
                })}
              />
            )}
          </Tab>

          <Tab value={BACKGROUND_COLOR}>
            {({ isSelected }) => (
              <div
                className={classNames(styles.Icon, styles.IconVariantColor, {
                  [styles.IconIsSelected]: isSelected,
                })}
              />
            )}
          </Tab>

          <Tab value={BACKGROUND_GRADIENT}>
            {({ isSelected }) => (
              <div
                className={classNames(styles.Icon, styles.IconVariantGradient, {
                  [styles.IconIsSelected]: isSelected,
                })}
              />
            )}
          </Tab>
        </Tabs>
      </div>

      <div className={styles.List}>
        <div className={styles.Track}>
          <Image name={BACKGROUND_IMAGE} />
          <Color label="Color"  name={BACKGROUND_COLOR} />
          <Gradient label="Gradient" name={BACKGROUND_GRADIENT} />
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = (state: Object): Object => ({
  initialValues: getFieldById(state, BACKGROUND),
});

export default compose(
  connect(mapStateToProps, { updateTemplate }),
  withState('tab', 'setTab', BACKGROUND_IMAGE),
  withHandlers({
    handleChange: ({ setTab }): func => (id: number|string): void => setTab(id),
  }),
  reduxForm({
    form: 'backgroundForm',
  }),
)(BackgroundForm);
