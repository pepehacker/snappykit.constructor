import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

// Components
import { Container, Title } from 'views/Editor';

// Containers
import Form from './containers/Form';

// Entities
import { SMARTPHONE } from 'entities/template/constants';
import { updateWebsiteSection } from 'entities/websites/actions';
import { getSectionById } from 'entities/websites/selector';

// Styles
import styles from './Smartphone.scss';

const Smarthpone = ({
  initialValues,
  handleChange,
}) => (
  <div className={styles.Root}>
    <Title title="Smartphone" />

    <Container>
      <Form onChange={handleChange} />
    </Container>
  </div>
);

const mapStateToProps = (state: Object, { location }) => {
  const match = matchPath(get(location, 'pathname'), {
    path: '/:websiteId/editor/:sectionId/:id?',
  });

  const id = get(match, 'params.id');
  const websiteId = get(match, 'params.websiteId');
  const initialValues = getSectionById(state, websiteId, id || SMARTPHONE);

  return {
    id, initialValues, websiteId,
  };
};

export default compose(
  connect(mapStateToProps, { updateWebsiteSection }),
  withHandlers({
    handleChange: ({ id, updateWebsiteSection, websiteId }): func =>
      (value, dispatch, props, prevValue): void =>
        get(value, 'mockup') !== get(prevValue, 'mockup') &&
          updateWebsiteSection(websiteId, id || SMARTPHONE, value),
  }),
)(Smarthpone);
