import classNames from 'classnames';
import * as React from 'react';
import { Swipeable } from 'react-swipeable';
import { compose, withHandlers, withState } from 'recompose';

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

// Styles
import styles from './Template3.scss';

const Template3 = ({ handleNext, handlePrev, step }) => (
  <TemplateContext.Consumer>
    {({ view = VIEW.DESKTOP }) => {
      const rootClassNames = classNames(
        styles.Root,
        {
          [styles.RootVariantDesktop]:
            view === VIEW.DESKTOP || view === VIEW.DESKTOP_LARGE,
          [styles.RootVariantMobile]: view === VIEW.MOBILE,
          [styles.RootVariantTablet]: view === VIEW.TABLET,
        },
        view === VIEW.MOBILE && {
          [styles.RootStepContent]: step === 0,
          [styles.RootStepSlider]: step === 1,
        },
      );

      return (
        <div className={rootClassNames}>
          <header className={styles.Header}>
            <Icon classNames={{ icon: styles.Icon }} />
            <Social className={styles.Social} />
          </header>

          <div className={styles.Body}>
            <Background
              classNames={{
                root: styles.Background,
                container: styles.Container,
              }}
            >
              <Swipeable
                className={styles.Wrapper}
                onSwipedLeft={handleNext}
                onSwipedRight={handlePrev}
              >
                <div className={styles.Track}>
                  <div className={styles.Content}>
                    <Text
                      classNames={{
                        root: styles.Title,
                        text: styles.TitleText,
                      }}
                      id={TITLE}
                    />

                    <div className={styles.DescriptionWrapper}>
                      <Text
                        classNames={{
                          root: styles.Description,
                          text: styles.DescriptionText,
                        }}
                        id={DESCRIPTION}
                      />
                    </div>

                    <Store className={styles.Store} />
                  </div>

                  <div className={styles.Slider}>
                    <Smartphone
                      classNames={{
                        root: styles.Smartphone,
                        container: styles.Screenshots,
                        mockup: styles.SmartphoneMockup,
                      }}
                    >
                      <Screenshots
                        classNames={{ item: styles.ScreenshotsItem }}
                      />
                    </Smartphone>
                  </div>
                </div>

                {view === VIEW.MOBILE && (
                  <div className={styles.Dots}>
                    <div
                      className={classNames(styles.DotsItem, {
                        [styles.DotsItemSelected]: step === 0,
                      })}
                      onClick={handlePrev}
                    />

                    <div
                      className={classNames(styles.DotsItem, {
                        [styles.DotsItemSelected]: step === 1,
                      })}
                      onClick={handleNext}
                    />
                  </div>
                )}
              </Swipeable>
            </Background>

            <Background className={styles.Blur} />
          </div>

          <footer className={styles.Footer}>
            <Text classNames={{ text: styles.CopyrightText }} id={COPYRIGHT} />
            <Policy className={styles.Policy} />
          </footer>
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

export default compose(
  withState('step', 'setStep', 0),
  withHandlers({
    handleNext: ({ setStep, step }): Function => () =>
      setStep(Math.min(step + 1, 1)),
    handlePrev: ({ setStep, step }): Function => () =>
      setStep(Math.max(step - 1, 0)),
  }),
)(Template3);
