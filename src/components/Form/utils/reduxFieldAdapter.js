export default ({ children, input, meta: { error, touched }, ...props }) =>
  children({
    ...input,
    ...props,
    error,
    touched,
    value: input.value || props.defaultValue || ''
  });
