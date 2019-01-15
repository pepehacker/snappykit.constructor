import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Components
import { Container, Title } from 'views/Editor';
import Form from './components/Form';

// Entities
import { updateTemplate } from 'entities/template/actions';
import { ICON } from 'entities/template/constants';
import { getFieldById } from 'entities/template/selector';

// Styles
import styles from './Icon.scss';

const Icon = ({
  initialValues,
  handleChange,
}) => (
  <div className={styles.Root}>
    <Title title="Icon" />

    <Container>
      <Form
        initialValues={initialValues}
        onChange={handleChange}
      />
    </Container>
  </div>
);

const mapStateToProps = (state: Object, { match }) => ({
  initialValues: getFieldById(state, ICON),
});

export default compose(
  connect(mapStateToProps, { updateTemplate }),
  withHandlers({
    handleChange: ({ updateTemplate }): func => (value: Object): void =>
      updateTemplate(ICON, value),
  }),
)(Icon);
