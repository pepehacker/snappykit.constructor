import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Link from './Link';

// Entities
import {
  TEXT_FONT_VALUES,
  TEXT_STYLE_VALUES,
  POLICY, POLICY_PRIVACY, POLICY_TERMS,
  VIEW,
} from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Policy.scss';

const TemplatePolicy = ({
  className,
  color,
  font,
  isEditor = true,
  items,
  style: fontWeight,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root, {
    [styles.RootViewDesktop]: view === VIEW.DESKTOP,
    [styles.RootViewMobile]: view === VIEW.MOBILE,
  });

  return (
    <div className={rootClassNames}>
      {(get(items, POLICY_PRIVACY) || get(items, POLICY_TERMS)) && (
        <Link to={`/1/editor/text/${POLICY}`}>
          <div
            className={styles.Container}
            style={{
              color, fontWeight,
              fontFamily: `'${font}', sans-serif`,
            }}
          >
            {get(items, POLICY_PRIVACY) && (
              <div className={styles.Privacy}>
                PRIVACY
              </div>
            )}

            {get(items, POLICY_TERMS) && (
              <div className={styles.Terms}>
                TERMS
              </div>
            )}
          </div>
        </Link>
      )}
    </div>
  );
};

TemplatePolicy.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.oneOf(TEXT_FONT_VALUES),
  style: PropTypes.oneOf(TEXT_STYLE_VALUES.map(({ value }) => value)),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, POLICY);

export default connect(mapStateToProps)(TemplatePolicy);
