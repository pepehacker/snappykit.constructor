import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from './components/Card';

import screen from './assets/screen.jpg';
import styles from './Templates.scss';

const Templates = ({
  currentTemplate,
  handleClick,
  items,
}) => (
  <div className={styles.Root}>
    <div className={styles.Title}>
      Templates
    </div>

    {items && items.length > 0 && (
      <div className={styles.List}>
        {items.map(id => (
          <Card
            image={screen}
            isActive={id === currentTemplate}
            id={id}
            isPro={id === 3}
            key={id}
            title={`Template #${id}`}
          />
        ))}
      </div>
    )}
  </div>
);

const mapStateToProps = ({ views }) => get(views, 'templates', {});

export default connect(mapStateToProps)(Templates);
