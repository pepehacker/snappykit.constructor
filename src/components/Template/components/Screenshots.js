import classNames from 'classnames';
import React, { Fragment } from 'react';
import Slider from 'react-slick';

// Components
import Link from './Link';

// Styles
import styles from './Screenshots.scss';

const SETTINGS = {
  arrows: false,
  dots: false,
  infinite: false,
};

const TemplateScreenshots = ({
  className,
  classNames: {
    root: rootClassName,
    container: containerClassName,
    item: itemClassName,
    slider: sliderClassName,
  },
  isEditor = true,
}) => {
  const rootClassNames = classNames(className, rootClassName, styles.Root);
  const containerClassNames = classNames(containerClassName, styles.Container);
  const itemClassNames = classNames(itemClassName, styles.Item);
  const sliderClassNames = classNames(sliderClassName, styles.Slider);

  const LinkComponent = isEditor ? Link : Fragment;

  return (
    <div className={rootClassNames}>
      <LinkComponent {...(isEditor && { to: `/1/editor/screenshots` })}>
        <div className={containerClassNames}>
          <Slider {...SETTINGS} className={sliderClassNames}>
            <div className={itemClassNames}>
              <img
                alt={123}
                className={styles.Image}
                src="https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg"
              />
            </div>

            <div className={itemClassNames}>
              <img
                alt={123}
                className={styles.Image}
                src="https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg"
              />
            </div>

            <div className={itemClassNames}>
              <img
                alt={123}
                className={styles.Image}
                src="https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg"
              />
            </div>
          </Slider>
        </div>
      </LinkComponent>
    </div>
  );
};

export default TemplateScreenshots;
