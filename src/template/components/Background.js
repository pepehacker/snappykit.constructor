import { get } from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

// Template
import {
  // Constants
  BACKGROUND,
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
  id,
  history,
  location
}) => {
  const [isFocused, setFocusState] = React.useState(false);
  let focusTimeout = null;

  return (
    <TemplateContext.Consumer>
      {({ data, isEditor, view, websiteId }) => {
        const rootClassNames = classNames(
          className,
          rootClassName,
          styles.Root,
          {
            [styles.RootViewDesktop]: view === VIEW.DESKTOP,
            [styles.RootViewMobile]: view === VIEW.MOBILE,
            [styles.RootViewTablet]: view === VIEW.TABLET
          },
          {
            [styles.RootIsFocused]: isFocused
          }
        );

        const containerClassNames = classNames(
          containerClassName,
          styles.Container
        );

        const { color, gradient, image } = getSectionById(
          data,
          id || BACKGROUND
        );

        const currentColor = get(image, 'color') || color;
        const { angle, from, to } = get(image, 'gradient') || gradient || {};

        const handleClick = () => {
          const url = `/${websiteId}/editor/background${
            (id && `/${id}`) || ''
          }`;

          const isSelected: boolean = location.pathname === url;
          isEditor && isFocused && !isSelected && history.push(url);
        };

        const handleMove = (event) => {
          if (!isFocused) {
            setFocusState(true);
          }

          clearTimeout(focusTimeout);

          focusTimeout = setTimeout(() => setFocusState(false), 1000);
        };

        return (
          <div
            className={rootClassNames}
            onClick={handleClick}
            onMouseLeave={isEditor ? () => setFocusState(false) : null}
            onMouseMove={isEditor ? handleMove : null}
          >
            {image && (
              <div
                className={styles.Cover}
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover'
                }}
              />
            )}
            {currentColor && (
              <div
                className={styles.Cover}
                style={{
                  backgroundColor: currentColor
                }}
              />
            )}
            {from && to && (
              <div
                className={styles.Cover}
                style={{
                  backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`
                }}
              />
            )}

            {isEditor && <div className={styles.Focus} />}

            <div className={containerClassNames}>{children}</div>
          </div>
        );
      }}
    </TemplateContext.Consumer>
  );
};

TemplateBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string
};

export default withRouter(TemplateBackground);
