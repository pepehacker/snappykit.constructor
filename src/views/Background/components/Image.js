import React from 'react';

// Components
import { Field } from 'components/Form';

const BackgroundImage = () => (
  <div>
    123
  </div>
);

export default (props: Object) => (
  <Field {...props} withoutLabel>
    <BackgroundImage />
  </Field>
);
