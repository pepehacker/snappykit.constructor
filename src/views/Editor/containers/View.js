import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath, withRouter } from 'react-router-dom';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

// Ducks
import { setBusy } from '../ducks/actions';

// Entities
import { getWebsiteById } from 'entities/websites';

// Templates
import Template, { TemplateContext, VIEW } from 'template';

// Styles
import styles from './View.scss';

const EditorView = ({
  scale,
  size,
  templateSize,
  templateId,
  view = VIEW.DESKTOP,
  website,

  // Registes
  registerRoot,
  registerContainer,
}) => {
  const rootClassNames = classNames(styles.Root, {
    [styles.RootVariantDesktop]: view === VIEW.DESKTOP,
    [styles.RootVariantMobile]: view === VIEW.MOBILE,
    [styles.RootVariantTablet]: view === VIEW.TABLET,
  });

  return (
    <div ref={registerRoot} className={rootClassNames}>
      <div
        ref={registerContainer} className={styles.Container}
        style={size}
      >
        {scale < 1 && <div className={styles.Scale}>
          {`${Math.floor(scale * 100)}%`}
        </div>}

        <TemplateContext.Provider
          value={{
            data: get(website, 'data'),
            isEditor: true,
            view,
            websiteId: get(website, 'id', 'new'),
          }}
        >
          <div
            className={styles.Layout}
            style={{
              minHeight: `${size.height / scale}px`,
              minWidth: `${size.width / scale}px`,
              transform: `scale(${scale})`,
            }}
          >
            <Template id={templateId} />
          </div>
        </TemplateContext.Provider>
      </div>
    </div>
  );
};

const mapStateToProps = ({ views, ...state }, { location }) => {
  const match = matchPath(get(location, 'pathname'), { path: '/:websiteId' });
  const website = getWebsiteById(state, get(match, 'params.websiteId'));

  return {
    ...get(views, 'editor'),
    website,
    templateId: get(website, 'templateId'),
  };
};

export default withRouter(
  compose(
    connect(
      mapStateToProps,
      { setBusy },
    ),
    withState('scale', 'setScale', 1),
    withState('size', 'setSize', {}),
    withState('templateSize', 'setTemplateSize', {}),
    withHandlers(() => {
      let $root;
      let $container;

      return {
        // Updaters
        handleResize: ({ setTemplateSize, setScale, setSize, view }): func => (
          event: Object,
        ): void => {
          if ($root) {
            let newSize;
            let newScale;

            const rootHeight = $root.clientHeight;
            const rootWidth = $root.clientWidth;

            switch (view) {
              case VIEW.DESKTOP:
                newSize = {
                  height: Math.min(720, (rootWidth / 16) * 9),
                  width: Math.min(1280, rootWidth),
                };
                newScale = newSize.width / 1280;
                break;
              case VIEW.MOBILE:
                newSize = {
                  height: Math.min(667, rootHeight),
                  width: Math.min(375, (rootHeight / 16) * 9),
                };
                newScale = newSize.width / 375;
                break;
              case VIEW.TABLET:
                newSize = {
                  height: Math.min(1024, rootHeight),
                  width: Math.min(768, (rootHeight / 16) * 12),
                };
                newScale = newSize.width / 768;
                break;
              default:
                newSize = {
                  height: rootHeight,
                  width: rootWidth,
                };
                newScale = 1;
                break;
            }

            setScale(newScale);
            setSize(newSize);
          }
        },

        // Registers
        registerContainer: (): func => (node: HTMLDivElement): void => {
          $container = node;
        },
        registerRoot: (): func => (node: HTMLDivElement): void => {
          $root = node;
        },

        // Updaters
        updateTemplateSize: ({ templateSize, setTemplateSize }): func => (event: Object) =>
          (get(templateSize, 'width') !== $container.firstChild.clientWidth ||
            get(templateSize, 'height') !== $container.firstChild.clientHeight) &&
          setTemplateSize({
            height: $container.firstChild.clientHeight,
            width: $container.firstChild.clientWidth,
          }),
      };
    }),
    lifecycle({
      componentDidMount() {
        const { handleResize } = this.props;
        handleResize();
        window.addEventListener('resize', handleResize, false);
      },
      componentDidUpdate({ view: prevView }) {
        const { handleResize, updateTemplateSize, view } = this.props;
        // Update container size
        view !== prevView && handleResize();
        // Update template size
        updateTemplateSize();
      },
      componentWillUnmount() {
        window.removeEventListener('resize', this.props.handleResize, false);
      },
    }),
  )(EditorView),
);
