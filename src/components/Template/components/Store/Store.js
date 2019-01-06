import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

// Components
import Button from './components/Button';
import Link from '../Link';

// Entities
import { VIEW } from 'entities/template/constants';

// Styles
import styles from './Store.scss';

const TemplateStore = ({
  className,
  isEditor = true,
  view = VIEW.DESKTOP,
}) => {
  const rootClassNames = classNames(className, styles.Root);
  const LinkComponent = isEditor ? Link : Fragment;

  return (
    <div className={rootClassNames}>
      <LinkComponent {...(isEditor && { to: '/1/editor/store' })}>
        <div className={styles.Container}>
          <Button
            isEditor={isEditor}
            variant={Button.VARIANT.APP_STORE}
            view={VIEW}
          />

          <Button
            isEditor={isEditor}
            variant={Button.VARIANT.GOOGLE_PLAY}
            view={VIEW}
          />
        </div>
      </LinkComponent>
    </div>
  );
};

TemplateStore.propTypes = {
  className: PropTypes.string,
  isEditor: PropTypes.bool,
  view: PropTypes.oneOf([VIEW.DESKTOP, VIEW.MOBILE]),
};

export default TemplateStore;
