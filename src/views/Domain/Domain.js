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
  subInitialValues,
  websiteId
}): React.Element<'div'> => (
  <div className={styles.Root}>
    <div className={styles.Section}>
      <Title>Domain</Title>

      <div className={styles.Group}>
        <SubForm
          applyChanges={handleChange}
          initialValues={subInitialValues}
          websiteId={websiteId}
        />
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
      domain: get(website, 'domain'),
      domain_free: get(website, 'domain_free')
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
