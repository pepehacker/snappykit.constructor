import React from 'react';
import { compose, withProps } from 'recompose';

// Template
import { getTemplateById } from 'template';

const Template = ({
  Component,
  id,
  style,
  ...props
}) => (
  <div style={style}>
    {Component && <Component />}
  </div>
);

export default compose(
  withProps(({ id }) => getTemplateById(id)),
)(Template);
