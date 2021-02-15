import { createBrowserHistory } from 'history';
import { get, isEmpty, uniq, values } from 'lodash';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Router, Route } from 'react-router-dom';

// Api
import api from 'api';

// Template
import { convertTemplateData, getTemplateById, Sandbox } from 'template';
// Utils
import * as serviceWorker from './utils/serviceWorker';

// Styles
import './App.scss';
import '@fortawesome/fontawesome-pro/css/all.min.css';

const domain =
  window.location.hostname === 'localhost'
    ? 'tdfkpd.snappykit.com'
    : window.location.hostname;

const history = createBrowserHistory();

api('websites.getApp', { domain }, { noCredentials: true }).then(
  ({ data: app }) => {
    try {
      const json = JSON.parse(get(app, 'json', ''));
      const template = getTemplateById(get(json, 'templateId', 1));

      const data = convertTemplateData(json, template.config);
      const isSupported = !isEmpty(data);

      const fonts = uniq(
        values(get(data, 'section', {})).map((section: Object): string =>
          get(section, 'font')
        )
      )
        .filter((font: string): boolean => !!font)
        .map((font: string): string => font.replace(' ', '+'));

      const formattedApp = {
        data,
        isSupported,
        id: get(app, 'id'),
        description: get(app, 'description', ''),
        isPro: get(app, 'is_pro', false),
        templateId: get(json, 'templateId', 1),
        title: get(app, 'title', 'Untitled')
      };

      ReactDOM.render(
        <Fragment>
          <Helmet>
            <link
              href={`https://fonts.googleapis.com/css?family=${fonts.join(
                '|'
              )}:300,400,500,700`}
              rel="stylesheet"
            />
            <meta content={formattedApp.description} name="description" />
            <title>{formattedApp.title}</title>
          </Helmet>

          <Router history={history}>
            <Route
              path="/"
              render={(props) => (
                <Sandbox
                  {...props}
                  app={formattedApp}
                  isSupported={isSupported}
                />
              )}
            />
          </Router>
        </Fragment>,
        document.getElementById('root')
      );
    } catch (e) {
      // eslint-disable-next-line
      console.error(`The template (${get(app, 'id')}) is not supported!`);
    }
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
