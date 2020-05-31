import { get } from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// Template
import {
  // Constants
  BACKGROUND,
  VIEW,
  // Provider
  TemplateContext,
  // Selector
  getSectionById,
} from 'template';

// Styles
import styles from './Background.scss';

// Utils
import { capitalize } from 'utils/string';

const TemplateBackground = ({
  className,
  classNames: { root: rootClassName, container: containerClassName } = {},
  children,
  id,
  history,
  location,
}) => {
  const [isFocused, setFocusState] = React.useState(false);

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
            [styles.RootViewTablet]: view === VIEW.TABLET,
          },
          {
            [styles.RootIsFocused]: isFocused,
          },
        );

        const containerClassNames = classNames(
          containerClassName,
          styles.Container,
        );

        const { color, gradient, image } = getSectionById(
          data,
          id || BACKGROUND,
        );

        const currentColor = get(image, 'color') || color;
        const { angle, from, to } = get(image, 'gradient') || gradient || {};

        return (
          <div
            className={rootClassNames}
            onMouseLeave={isEditor ? () => setFocusState(false) : null}
          >
            {image && (
              <div
                className={styles.Cover}
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                }}
              />
            )}
            {currentColor && (
              <div
                className={styles.Cover}
                style={{
                  backgroundColor: currentColor,
                }}
              />
            )}
            {from && to && (
              <div
                className={styles.Cover}
                style={{
                  backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
                }}
              />
            )}

            <div className={containerClassNames}>{children}</div>

            {isEditor && (
              <NavLink
                activeClassName={styles.LinkIsSelected}
                className={styles.Link}
                to={`/${websiteId}/editor/background/${(id && `${id}`) ||
                  BACKGROUND}`}
              >
                {capitalize(id.replace('_', ' '))}
              </NavLink>
            )}
          </div>
        );
      }}
    </TemplateContext.Consumer>
  );
};

TemplateBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
};

export default withRouter(TemplateBackground);
