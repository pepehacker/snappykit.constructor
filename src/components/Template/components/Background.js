import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Entities
import { BACKGROUND, VIEW } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Background.scss';

const TemplateBackground = ({
  className,
  children,
  color,
  gradient: {
    angle,
    from,
    to,
  } = {},
  style,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
    [styles.RootViewTablet]: view === VIEW.TABLET,
  });

  return (
    <div
      className={rootClassNames}
      style={{
        ...style,
        backgroundColor: color,
        backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
    >
      {children}
    </div>
  );
};

TemplateBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  gradient: PropTypes.shape({
    angle: PropTypes.number,
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.TABLET, VIEW.MOBILE]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, BACKGROUND);

export default connect(mapStateToProps)(TemplateBackground);
