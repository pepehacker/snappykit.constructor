import { get } from 'lodash';
import { array, object, string } from 'yup';

export const SCREENSHOTS = 'screenshots';

// Schema
export const SCREENSHOTS_SCHEMA = (defaults: Object) =>
  object().shape({
    items: array()
      .of(
        string().matches(
          /^@(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
        )
      )
      .default(get(defaults, 'items'))
  });
