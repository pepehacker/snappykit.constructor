// @flow
import { get, has, throttle } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { formValueSelector, reduxForm } from 'redux-form';

// API
import Unsplash from 'api/unsplash';

// Components
import Form, { Color, Input, Gradient } from 'components/Form';
import Image, { Card } from '../components/Image';
import Spinner from 'components/Spinner';

// Ducks
import { BACKGROUND_IMAGE_FORM } from '../ducks/constants';

// Styles
import styles from './common.scss';

// Template
import { BACKGROUND_COLOR, BACKGROUND_GRADIENT, BACKGROUND_IMAGE } from 'template';

type BackgroundImageFormType = {
  handleChange: (values: Object) => Function,
  handleEdit: (variant: Object) => Function,
  handleSubmit: (values: Object) => Function,
  isLoaded: boolean,
  query: string,
  result: Array<string>,
};

const BackgroundImageForm = ({
  // Props
  editType,
  image,
  query,
  result,
  // Handlers
  handleCancel,
  handleChange,
  handleEdit,
  handleSubmit,
  handleReset,
  // State
  isEdit,
  isLoaded,
}: BackgroundImageFormType): React.Element<typeof Form> => (
  <Form onSubmit={handleSubmit}>
    {isEdit ? (
      <div className={styles.Edit}>
        <div
          className={styles.Cancel} onClick={handleCancel}
          role="button" tabIndex={0}
        >
          BACK TO IMAGES
        </div>

        {image && (
          <div className={styles.Card}>
            <Card
              isSelected src={get(image, 'src')}
              variant="preview"
            />

            <div
              className={styles.Reset} onClick={handleReset}
              role="button" tabIndex={0}
            >
              {`Delete ${editType === BACKGROUND_COLOR ? 'Color' : 'Gradient'}`}
            </div>
          </div>
        )}

        <div className={styles.Form}>
          {editType === BACKGROUND_COLOR && <Color name={`${BACKGROUND_IMAGE}.color`} />}
          {editType === BACKGROUND_GRADIENT && <Gradient name={`${BACKGROUND_IMAGE}.gradient`} />}
        </div>
      </div>
    ) : (
      <React.Fragment>
        <div className={styles.Search}>
          <Input
            className={styles.Input}
            name="search"
            onChange={handleChange}
            placeholder="Search from Unsplash..."
          />
        </div>

        <div className={styles.List}>
          {query && isLoaded ? (
            <Spinner className={styles.Spinner} title={`Searching "${query}"...`} />
          ) : (
            <Image
              editType={editType}
              name={`${BACKGROUND_IMAGE}.src`}
              onEdit={handleEdit}
              photos={query && result}
            />
          )}
        </div>
      </React.Fragment>
    )}
  </Form>
);

const selector: Function = formValueSelector(BACKGROUND_IMAGE_FORM);
const mapStateToProps = (state: Object) => ({
  image: selector(state, 'image'),
  query: selector(state, 'search'),
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: BACKGROUND_IMAGE_FORM,
  }),
  withState('editType', 'setEditType', ({ initialValues }) =>
    has(initialValues, 'image.color')
      ? BACKGROUND_COLOR
      : has(initialValues, 'image.gradient')
        ? BACKGROUND_GRADIENT
        : null,
  ),
  withState('query', 'setQuery', ''),
  withState('result', 'setResult', []),
  withState('isEdit', 'setEdit', false),
  withState('isLoaded', 'setLoaded', false),
  withHandlers(({ setLoaded, setResult }) => {
    let queryTemp = '';

    const changeThrottle = throttle((searchString: string): void => {
      setLoaded(true);

      Unsplash.search
        .photos(searchString)
        .then(res => res.json())
        .then(res => {
          if (queryTemp === searchString) {
            const results = get(res, 'results', []);

            const formattedResults = results.map(
              (photo: Object): string => ({
                id: get(photo, 'id'),
                photo,
                src: get(photo, 'urls.regular'),
                user: {
                  link: get(photo, 'user.links.html'),
                  name: get(photo, 'user.name'),
                },
              }),
            );

            setLoaded(false);
            setResult(formattedResults);
          }
        });
    }, 2000);

    return {
      handleCancel: ({ setEdit }): Function => () => setEdit(false),
      handleChange: ({ query, setQuery, setResult }): Function => (event: SyntheticEvent): void => {
        const searchString = get(event, 'target.value', '').trim();

        if (searchString !== query) {
          queryTemp = searchString;

          setQuery(searchString);
          changeThrottle(searchString);
        }
      },
      handleEdit: ({ change, dispatch, image, setEdit, setEditType }) => (editType: string) => {
        setEdit(true);
        setEditType(editType);

        !has(image, editType) &&
          dispatch(
            change(
              `${BACKGROUND_IMAGE}.${editType}`,
              editType === BACKGROUND_COLOR
                ? 'rgba(131, 89, 193, 0.5)'
                : {
                  angle: 0,
                  from: 'rgba(94, 122, 219, 0.5)',
                  to: 'rgba(131, 89, 193, 0.5)',
                },
            ),
          );
      },
      handleReset: ({ change, dispatch, image, setEdit, setEditType }) => () => {
        dispatch(change(BACKGROUND_IMAGE, { src: get(image, 'src') }));

        setEdit(false);
        setEditType(null);
      },
    };
  }),
)(BackgroundImageForm);
