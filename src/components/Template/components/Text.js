import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Link from './Link';

// Entities
import {
  TEXT_FONT_VALUES, TEXT_STYLE_VALUES,
  VIEW,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Text.scss';

const TemplateText = ({
  className,
  color,
  font,
  id,
  isEditor = true,
  style: fontWeight,
  text,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
  });

  return (
    <div
      className={rootClassNames}
      style={{
        color, fontWeight,
        fontFamily: `'${font}', sans-serif`,
      }}
    >
      <Link to={`/1/editor/text/${id}`}>
        {text}
      </Link>
    </div>
  );
};

TemplateText.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
  font: PropTypes.oneOf(TEXT_FONT_VALUES),
  style: PropTypes.oneOf(TEXT_STYLE_VALUES.map(({ value }) => value)),
  text: PropTypes.string,
};

const mapStateToProps = (state: Object, { id }) =>
  getFieldById(state, id);

export default connect(mapStateToProps)(TemplateText);
