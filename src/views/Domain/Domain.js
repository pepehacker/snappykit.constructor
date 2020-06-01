import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import { Title } from 'views/Editor';

// Containers
import PrivacyForm from './containers/PrivacyForm';
import SeoForm from './containers/SeoForm';
import SubForm from './containers/SubForm';

// Entities
import { getWebsiteById, updateWebsite } from 'entities/websites';

// Styles
import styles from './Domain.scss';

const Domain = ({
  handleChange,
  seoInitialValues,
  subInitialValues
}): React.Element<'div'> => (
  <div>
    <div className={styles.Section}>
      <Title>Domain</Title>

      <div className={styles.Group}>
        <SubForm initialValues={subInitialValues} />
        <PrivacyForm />
      </div>
    </div>

    <div className={styles.Section}>
      <Title>SEO</Title>

      <div className={styles.Form}>
        <SeoForm initialValues={seoInitialValues} onChange={handleChange} />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state: Object, { location }): Object => {
  const match: Object = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/domain'
  });

  const websiteId: number | string = get(match, 'params.websiteId');
  const website: Object = getWebsiteById(state, websiteId);

  return {
    website,
    websiteId,
    seoInitialValues: {
      description: get(website, 'description'),
      title: get(website, 'title')
    },
    subInitialValues: {
      domain: get(website, 'domain')
    }
  };
};

export default compose(
  connect(mapStateToProps, { updateWebsite }),
  withHandlers({
    handleChange: ({ updateWebsite, websiteId }): Function => (
      values: Object
    ): void => updateWebsite(websiteId, values)
  })
)(Domain);
