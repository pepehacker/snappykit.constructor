import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Link from './Link';

// Entities
import { SMARTPHONE, VIEW } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Smartphone.scss';

const TemplateSmartphone = ({
  children,
  className,
  classNames: {
    root: rootClassName,
    container: containerClassName,
    mockup: mockupClassName,
  } = {},
  isEditor = true,
  mockup,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, rootClassName, styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
  });

  const containerClassNames = classNames(containerClassName, styles.Container);
  const mockupClassNames = classNames(mockupClassName, styles.Mockup);

  return (
    <div className={rootClassNames}>
      <Link
        className={styles.Link}
        to="/1/editor/smartphone"
      >
        <div
          className={mockupClassNames}
          style={{
            backgroundImage: `url(${require(`assets/mockup/${mockup}.png`)})`, /* eslint-disable-line */
          }}
        />
      </Link>

      {children && (
        <div className={containerClassNames}>
          {children}
        </div>
      )}
    </div>
  );
};

TemplateSmartphone.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    mockup: PropTypes.string,
  }),
  isEditor: PropTypes.bool,
  mockup: PropTypes.string,
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, SMARTPHONE);

export default connect(mapStateToProps)(TemplateSmartphone);
