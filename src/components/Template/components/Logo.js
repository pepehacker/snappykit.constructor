import React from 'react';

// Styles
import styles from './Logo.scss';

const Logo = () => (
  <div className={styles.Root}>
    <a
      className={styles.Link}
      href="/#"
    >
      <img
        alt="Snappy Kit"
        className={styles.Logo}
        src="https://lh3.googleusercontent.com/lZQ4iBSyZZcfy_m3gcN19NhiOoyvfCq8SVNjOcFS_Jii8VpGperd5TGPJzEGGIBqwHU7"
      />
    </a>
  </div>
);

export default Logo;
