import React from 'react';
import { connect } from 'react-redux';

// Entities
import { getWebsiteCount } from 'entities/websites';

// Services
import { getSubscriptionLimit } from 'services/session';

// Styles
import styles from './Limit.scss';

const WebsitesLimit = ({
  count = 30,
  limit = 45,
}) => (
  <div className={styles.Root}>
    <div className={styles.Title}>
      Created:&nbsp;
      <span className={styles.Count}>{count}</span>
      <span className={styles.Limit}>&nbsp;of&nbsp;{limit}</span>
    </div>

    <div className={styles.Progress}>
      <div
        className={styles.ProgressBar}
        style={{ width: `${count * 100 / limit}%`}}
      />
    </div>
  </div>
);

const mapStateToProps = (state: Object) => ({
  count: getWebsiteCount(state),
  limit: getSubscriptionLimit(state),
});

export default connect(mapStateToProps)(WebsitesLimit);
