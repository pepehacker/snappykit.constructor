import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

// Components
import Form, { Color, Select, SelectItem, Textarea } from 'components/Form';
import Style from '../components/Style';

// Services
import { isPro } from 'services/session';

// Template
import { TEXT_FONT, TEXT_FONT_VALUES, TEXT_FONTS_PRO, TEXT_STYLE } from 'template';

const TextForm = ({ handleSubmit, isPro, withText }) => (
  <Form onSubmit={handleSubmit}>
    {withText && <Textarea
      label="Text" name="text"
      placeholder="Set Text"
    />}

    <Select
      label="Font" name="font"
      placeholder="Choose a font"
    >
      {(isPro
        ? TEXT_FONT_VALUES
        : TEXT_FONT_VALUES.sort(name => (TEXT_FONTS_PRO.indexOf(name) > -1 ? 1 : -1))
      ).map(
        (name: string): React.Element<typeof SelectItem> => (
          <SelectItem
            key={name}
            isPro={!isPro && TEXT_FONTS_PRO.indexOf(name) > -1}
            label={name}
            value={name}
          />
        ),
      )}
    </Select>

    <Style label="Style" name="style" />
    <Color label="Color" name="color" />
    {/* <Palette label="Palette" name="color" /> */}
  </Form>
);

TextForm.propTypes = {
  withText: PropTypes.bool,
};

const mapStateToProps = state => ({
  isPro: isPro(state),
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'textForm',
    initialValues: {
      font: TEXT_FONT.ROBOTO,
      style: TEXT_STYLE.LIGHT,
    },
  }),
)(TextForm);
