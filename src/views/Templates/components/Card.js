import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { setCurrentTemplate } from 'views/Templates';

import styles from './Card.scss';

const TemplatesCard = ({
  className: classNameProp,
  handleClick,
  image,
  isActive,
  id,
  isPro,
  title,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootIsActive]: !!isActive,
  });

  return (
    <div className={className} onClick={handleClick}>
      <img
        alt={title}
        className={styles.Image}
        src={image}
      />

      {isPro && (
        <div className={styles.Pro}>
          PRO
        </div>
      )}

      <div className={styles.State}>
        <div className={styles.Check} />
      </div>
    </div>
  );
};

TemplatesCard.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  isActive: PropTypes.bool,
  isPro: PropTypes.bool,
  title: PropTypes.string,
};

const mapDispatchToProps = (dispatch, { id }) => ({
  handleClick: () => dispatch(setCurrentTemplate(id))
});

export default connect(null, mapDispatchToProps)(TemplatesCard);
