import PropTypes from 'prop-types';
import React from 'react';

// Components
import Item from './components/Item';

// Utils
import generateMenu from './utils/generateMenu';

import styles from './Menu.scss';

const WebsiteMenu = ({ websiteId }) => (
  <div className={styles.Root}>
    <div className={styles.List}>
      {generateMenu(websiteId).map(({ id, ...item }) => (
        <Item {...item} key={id} />
      ))}
    </div>
  </div>
);

WebsiteMenu.propTypes = {
  websiteId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default WebsiteMenu;
