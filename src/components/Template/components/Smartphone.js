import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { string } from 'yup';

// Components
import Link from './Link';

// Entities
import { getFieldById } from 'entities/template';

// Styles
import styles from './Smartphone.scss';

const TemplateSmartphone = ({
  className,
  id,
  isEditor = true,
  mockup,
}) => {
  const rootClassNames = classNames(className, styles.Root);
  const LinkComponent = isEditor ? Link : Fragment;

  return (
    <div className={rootClassNames}>
      <LinkComponent {...(isEditor && { className: styles.Link, to: '/1/editor/smartphone' })}>
        <div
          className={styles.Mockup}
          style={{ backgroundImage: `url(${require(`assets/mockup/${mockup}.png`)})` /* eslint-disable-line */ }}
        />
      </LinkComponent>
    </div>
  );
};

TemplateSmartphone.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  mockup: PropTypes.string,
  // eslint-disable-next-line
  schema: PropTypes.instanceOf(string).isRequired,
};

const mapStateToProps = (state: Object, { id, schema }) => (id && schema && ({
  mockup: schema.cast(getFieldById(state, id)),
}));

export default connect(mapStateToProps)(TemplateSmartphone);
