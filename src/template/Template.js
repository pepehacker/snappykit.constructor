import React from 'react';
import { compose, withProps } from 'recompose';

// Template
import { getTemplateById } from 'template';

const Template = ({ Component, ...props }) => <Component {...props} />;

export default compose(withProps(({ id }) => getTemplateById(id)))(Template);
