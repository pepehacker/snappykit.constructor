// @flow
import { get, throttle } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// Components
import Form, { Input } from 'components/Form';
import Image from '../components/Image';

// Ducks
import { BACKGROUND_IMAGE_FORM } from '../ducks/constants';

// Styles
import styles from './ImageForm.scss';

// Template
import { BACKGROUND_IMAGE } from 'template';

const BackgroundImageForm = ({ handleChange, handleSubmit, query, result }) => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.Search}>
      <Input
        className={styles.Input}
        label="Upload from unsplash"
        name="search"
        onChange={handleChange}
      />
    </div>

    <Image name={`${BACKGROUND_IMAGE}.src`} photos={query && result} />
  </Form>
);

const selector: Function = formValueSelector(BACKGROUND_IMAGE_FORM);
const mapStateToProps = (state: Object) => ({
  query: selector(state, 'search'),
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: BACKGROUND_IMAGE_FORM,
  }),
  withState('query', 'setQuery', ''),
  withState('result', 'setResult', []),
  withHandlers(({ setResult }) => {
    const changeThrottle = throttle((searchString: string): void => {
      const clientId: string = '37dc7a1a5e94dd2846f791d4b9efe5ee402369548e1b37a7671107772bbb6909';

      fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchString}&client_id=${clientId}&w=1920`,
      )
        .then(res => res.json())
        .then(res => {
          const results = get(res, 'results', []);
          const formattedResults = results.map(
            (photo: Object): string => get(photo, 'urls.regular'),
          );
          setResult(formattedResults);
        });
    }, 2000);

    return {
      handleChange: ({ query, setQuery, setResult }): Function => (event: SyntheticEvent): void => {
        const searchString = get(event, 'target.value', '').trim();

        if (searchString !== query) {
          setQuery(searchString);
          changeThrottle(searchString);
        }
      },
    };
  }),
)(BackgroundImageForm);
