import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// Components
import Button from './components/Button';
import Link from '../Link';

// Entities
import { STORE, VIEW } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Store.scss';

const TemplateStore = ({
  appStore,
  className,
  googlePlay,
  isEditor = true,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root);
  const LinkComponent = isEditor ? Link : Fragment;

  return (
    <div className={rootClassNames}>
      <LinkComponent {...(isEditor && { to: '/1/editor/store' })}>
        <div className={styles.Container}>
          {appStore && (
            <Button
              isEditor={isEditor}
              variant={Button.VARIANT.APP_STORE}
              view={VIEW}
            />
          )}

          {googlePlay && (
            <Button
              isEditor={isEditor}
              variant={Button.VARIANT.GOOGLE_PLAY}
              view={VIEW}
            />
          )}
        </div>
      </LinkComponent>
    </div>
  );
};

TemplateStore.propTypes = {
  appStore: PropTypes.string,
  className: PropTypes.string,
  isEditor: PropTypes.bool,
  googlePlay: PropTypes.string,
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE]),
};

const mapStateToProps = (state: Object) =>
  getFieldById(state, STORE);

export default connect(mapStateToProps)(TemplateStore);
