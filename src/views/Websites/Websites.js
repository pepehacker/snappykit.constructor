import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Item from './components/Item';

// Containers
import Limit from './containers/Limit';

// Entities
import { getWebsiteList } from 'entities/websites';

// Styles
import styles from './Websites.scss';

const Websites = ({
  items,
}) => (
  <div className={styles.Root}>
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <div className={styles.Title}>
          Your Websites
        </div>

        <div className={styles.Limit}>
          <Limit />
        </div>

        <div className={styles.Actions}>
          <Link
            className={styles.Create}
            to="/search"
          />
        </div>
      </div>

      {items && items.length > 0 && (
        <div className={styles.List}>
          {items.map((item: Object): func => (
            <Item {...item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = (state: Object): Object => ({
  items: getWebsiteList(state),
});

export default connect(mapStateToProps)(Websites);
