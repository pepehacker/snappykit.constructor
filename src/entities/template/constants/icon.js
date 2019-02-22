import { get } from 'lodash';
import { object, string } from 'yup';

export const ICON = 'icon';

// Schema
export const ICON_SCHEMA = (defaults: Object) => object().shape({
  src: string()
    .matches(/^@(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/)
    .default(get(defaults, 'src')),
});
