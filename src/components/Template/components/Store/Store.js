import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Item from './components/Item';
import Link from '../Link';

// Entities
import {
  STORE,
  STORE_APP_STORE,
  STORE_GOOGLE_PLAY,

  VIEW,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Store.scss';

const TemplateStore = ({
  className,
  isEditor = true,
  items,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
    [styles.RootViewTablet]: view === VIEW.TABLET,
  });

  return (
    <div className={rootClassNames}>
      <Link to="/1/editor/store">
        <div className={styles.Container}>
          {get(items, STORE_APP_STORE) && (
            <Item
              variant={STORE_APP_STORE}
              view={view}
            />
          )}

          {get(items, STORE_GOOGLE_PLAY) && (
            <Item
              variant={STORE_GOOGLE_PLAY}
              view={view}
            />
          )}
        </div>
      </Link>
    </div>
  );
};

TemplateStore.propTypes = {
  className: PropTypes.string,
  isEditor: PropTypes.bool,
  items: PropTypes.shape({
    [STORE_APP_STORE]: PropTypes.string,
    [STORE_GOOGLE_PLAY]: PropTypes.string,
  }),
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE, VIEW.TABLET]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, STORE);

export default connect(mapStateToProps)(TemplateStore);
