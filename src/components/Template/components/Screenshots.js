import classNames from 'classnames';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

// Components
import Link from './Link';

// Entities
import { SCREENSHOTS } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Screenshots.scss';

const SETTINGS = {
  arrows: false,
  draggable: false,
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
  items,
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
            {(items || []).map((image: stirng, index: number) => (
              <div className={itemClassNames} key={index}>
                <img
                  alt="Screenshot"
                className={styles.Image}
                  src={image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </LinkComponent>
    </div>
  );
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, SCREENSHOTS);

export default connect(mapStateToProps)(TemplateScreenshots);
