// @flow
import React from 'react';

// Styles
import styles from './Plans.scss';

type PlansPriceType = {
  description: string,
  icon: string,
  id: string,
  title: string,
  variant: string,
};

const PlansPrice: React.Element<'div'> = ({ description, icon, id, title, variant }) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Icon} />
      <div className={styles.Title}>{title}</div>
      <div className={styles.Description}>{description}</div>
      <div className={styles.Actions}>Next</div>
    </div>
  );
};

export default PlansPrice;
