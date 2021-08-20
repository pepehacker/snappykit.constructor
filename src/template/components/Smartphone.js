import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Smartphone from 'components/Smartphone';
import Link from './Link';

// Template
import { SMARTPHONE, TemplateContext, getSectionById } from 'template';

// Styles
import styles from './Smartphone.scss';

const TemplateSmartphone = ({
  className,
  classNames: {
    root: rootClassName,
    container: containerClassName,
    mockup: mockupClassName
  } = {},
  id
}) => (
  <TemplateContext.Consumer>
    {({ data, websiteId }) => {
      const { color, model, style } = getSectionById(data, id || SMARTPHONE);

      return (
        <div className={classNames(className, rootClassName, styles.Root)}>
          <Link
            className={styles.Link}
            to={`/${websiteId}/editor/smartphone${(id && `/${id}`) || ''}`}
          >
            <Smartphone color={color} model={model} style={style} />
          </Link>

          {/* {children && <div className={containerClassNames}>{children}</div>} */}
        </div>
      );
    }}
  </TemplateContext.Consumer>
);

TemplateSmartphone.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    mockup: PropTypes.string
  }),
  id: PropTypes.string
};

export default TemplateSmartphone;
