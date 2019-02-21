import classNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

// Entities
import { VIEW } from 'entities/template/constants';

// Templates
import Template, { TemplateContext } from 'template';

// Styles
import styles from './View.scss';


const EditorView = ({
  // Props
  className: classNameProp,
  height,
  scale,
  templateHeight,
  view = VIEW.DESKTOP,
  website,

  // Registers
  registerContainer,
  registerTrack,

  // State
  isBusied,
}) => {
  const className = classNames(classNameProp, styles.Root, {
    [styles.RootDeviceDesktop]: view === VIEW.DESKTOP,
    [styles.RootDeviceMobile]: view === VIEW.MOBILE,
    [styles.RootDeviceTablet]: view === VIEW.TABLET,

    [styles.RootIsBusied]: isBusied,
  });

  return (
    <div
      className={className}
      ref={registerContainer}
    >
      <div
        className={styles.Container}
        style={{ maxHeight: `${height}px` }}
      >
        <div
          className={styles.Track}
          ref={registerTrack}
        >
          {website && (
            <TemplateContext.Provider
              value={{
                data: get(website, 'data'),
                isEditor: true,
                view,
                websiteId: get(website, 'id', 'new'),
              }}
            >
              <Template
                id={get(website, 'templateId', 1)}
                style={{
                  margin:
                    scale !== 1 &&
                    !!templateHeight &&
                    `-${(templateHeight - templateHeight * scale) / 2}px 0`,
                  transform: !!scale && `scale(${scale})`,
                  transition: 'all .2s',
                }}
              />
            </TemplateContext.Provider>
          )}
        </div>
      </div>
    </div>
  );
};

EditorView.propTypes = ({
  className: PropTypes.string,
  height: PropTypes.number,
  scale: PropTypes.number,
  view: PropTypes.string,
});

export default EditorView;
