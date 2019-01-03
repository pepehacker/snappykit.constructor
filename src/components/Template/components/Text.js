import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { object } from 'yup';

// Components
import Link from './Link';

// Ducks
import { getFieldById } from 'entities/template';

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
}) => {
  const rootClassNames = classNames(className, styles.Root);

  return (
    <div
      className={rootClassNames}
      style={{
        color, fontWeight,
        fontFamily: `'${font}', sans-serif`,
      }}
    >
      {!isEditor ? text : (
        <Link to={`/1/editor/text/${id}`}>
          {text}
        </Link>
      )}
    </div>
  );
};

TemplateText.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
  font: PropTypes.string,
  style: PropTypes.string,
  // eslint-disable-next-line
  schema: PropTypes.instanceOf(object).isRequired,
  text: PropTypes.string,
};

const mapStateToProps = (state: Object, { id, schema }) =>
  schema.cast(getFieldById(state, id));

export default connect(mapStateToProps)(TemplateText);
