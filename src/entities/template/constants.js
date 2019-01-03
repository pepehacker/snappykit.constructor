export const COLOR = {
  regex: /^(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))$/,
};

export const STYLE = {
  LIGHT: '100',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '700',

  regex: /^(100|400|500|700)$/,
};
