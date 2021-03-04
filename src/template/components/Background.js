import { get } from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

// Template
import {
  // Constants
  BACKGROUND,
  BACKGROUND_MODE,
  VIEW,
  // Provider
  TemplateContext,
  // Selector
  getSectionById
} from 'template';

// Styles
import styles from './Background.scss';

const TemplateBackground = ({
  className,
  classNames: { root: rootClassName, container: containerClassName } = {},
  children,
  id = BACKGROUND,
  history,
  location
}) => {
  const { data, isEditor, view, websiteId } = React.useContext(TemplateContext);

  // @todo - выделять, если открыт текущий фон
  // const { isFocused } = React.useMemo(() => {
  //   const isFocused = matchPath(location.pathname, {
  //     path: `/${websiteId}/editor/background${
  //       id !== BACKGROUND ? `/${id}` : ''
  //     }`
  //   });

  //   return { isFocused };
  // }, [id, location, websiteId]);

  const handleContainerClick = React.useCallback((event) => {
    const elements = document.elementsFromPoint(event.clientX, event.clientY);

    let hasLink = false;

    elements.forEach((element) => {
      if (element.tagName === 'A') {
        hasLink = true;
      }
    });

    // !isFocused &&
    !hasLink &&
      history.push(
        `/${websiteId}/editor/background${id !== BACKGROUND ? `/${id}` : ''}`
      );
  });

  const { color, gradient, image, mode } = getSectionById(
    data,
    id || BACKGROUND
  );

  const { angle, from, to } =
    (mode === BACKGROUND_MODE.IMAGE ? get(image, 'gradient') : gradient) || {};

  return (
    <div
      className={classNames(
        className,
        rootClassName,
        styles.Root,
        {
          [styles.RootViewDesktop]: view === VIEW.DESKTOP,
          [styles.RootViewMobile]: view === VIEW.MOBILE,
          [styles.RootViewTablet]: view === VIEW.TABLET
        },
        {
          [styles.RootIsEditor]: isEditor
          // [styles.RootIsFocused]: isFocused
        }
      )}
    >
      {mode === BACKGROUND_MODE.IMAGE && image && (
        <div
          className={styles.Cover}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover'
          }}
        />
      )}

      {((mode === BACKGROUND_MODE.COLOR && color) ||
        (mode === BACKGROUND_MODE.IMAGE && image && image.color)) && (
        <div
          className={styles.Cover}
          style={{
            backgroundColor:
              mode === BACKGROUND_MODE.COLOR ? color : image.color
          }}
        />
      )}

      {(mode === BACKGROUND_MODE.GRADIENT || mode === BACKGROUND_MODE.IMAGE) &&
        from &&
        to && (
          <div
            className={styles.Cover}
            style={{
              backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`
            }}
          />
        )}

      {isEditor && <div className={styles.Hover} />}

      <div
        className={classNames(containerClassName, styles.Container)}
        onClick={isEditor ? handleContainerClick : null}
      >
        {children}
      </div>
    </div>
  );
};

TemplateBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string
};

export default withRouter(TemplateBackground);
