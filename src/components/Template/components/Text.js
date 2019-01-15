import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// Components
import Link from './Link';

// Entities
import {
  TEXT_FONT, TEXT_STYLE,
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
  const rootClassNames = classNames(className, styles.Root);
  const LinkComponent = isEditor ? Link : Fragment;

  return (
    <div
      className={rootClassNames}
      style={{
        color, fontWeight,
        fontFamily: `'${font}', sans-serif`,
      }}
    >
      <LinkComponent
        isEditor={isEditor}
        to={`/1/editor/text/${id}`}
      >
        {text}
      </LinkComponent>
    </div>
  );
};

TemplateText.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
  font: PropTypes.oneOf(TEXT_FONT.values),
  style: PropTypes.oneOf(TEXT_STYLE.values),
  text: PropTypes.string,
};

const mapStateToProps = (state: Object, { id }) =>
  getFieldById(state, id);

export default connect(mapStateToProps)(TemplateText);
