import { get, has } from 'lodash';
import { connect } from 'react-redux';
import { matchPath, withRouter } from 'react-router-dom';
import { compose, lifecycle, withHandlers, withState } from 'recompose';

// Actions
import { setBusy } from '../../ducks/actions';

// Components
import View from './View';

// Entities
import { VIEW } from 'entities/template/constants';
import { getWebsiteById } from 'entities/websites';

const mapStateToProps = ({ views, ...state }, { location }) => {
  const match = matchPath(get(location, 'pathname'), { path: '/:websiteId'});
  const website = getWebsiteById(state, get(match, 'params.websiteId'));

  return {
    ...get(views, 'editor'), website,
    templateId: get(website, 'templateId'),
  };
};

export default withRouter(compose(
  connect(mapStateToProps, { setBusy }),
  withState('height', 'setHeight', 0),
  withState('templateHeight', 'setTemplateHeight', 0),
  withState('scale', 'setScale', 1),
  withHandlers((): Object => {
    let $root;
    let $track;

    return {
      // Handlers
      handleResize: ({
        height,
        scale,
        setBusy,
        setHeight,
        setScale,
        setTemplateHeight,
        view,
      }): func => (): void => {
        if ($root) {
          const width = Math.min($root.clientWidth,
            view === VIEW.DESKTOP
              ? 1280 : view === VIEW.TABLET
                ? 768 : 320);

          let newHeight = 1;
          let newScale = 1;

          switch (view) {
            case VIEW.DESKTOP:
              newHeight = Math.floor(width / 1.6666);
              newScale = width / 1280;
              break;
            case VIEW.TABLET:
              newHeight = Math.floor(width / 0.75);
              newScale = width / 768;
              break;
            case VIEW.MOBILE:
              newHeight = Math.floor(width / 0.5633);
              newScale = width / 320;
              break;
            default:
              newScale = 1;
              break;
          }

          if (newScale !== scale) {
            setScale(newScale);
          }

          if (newHeight !== height) {
            setHeight(newHeight);
          }

          if ($track && $track.firstChild) {
            setTemplateHeight($track.firstChild.clientHeight);
          }
        }

        setBusy(false);
      },

      // Registers
      registerContainer: (): func => (node: HTMLDivElement): void => {
        $root = node;
      },
      registerTrack: (): func => (node: HTMLDivElement): void => {
        $track = node;
      },
    };
  }),
  lifecycle({
    componentDidMount() {
      const { handleResize } = this.props;
      window.addEventListener('resize', handleResize, true);
      handleResize();
    },
    componentDidUpdate({ templateId: prevTemplateId, view: prevView }) {
      const { handleResize, templateId, view } = this.props;
      (prevView !== view || prevTemplateId !== templateId) && setTimeout(handleResize, 200);
    },
    componentWillUnmount() {
      const { handleResize } = this.props;
      window.removeEventListener('resize', handleResize, true);
    },
  }),
)(View));
