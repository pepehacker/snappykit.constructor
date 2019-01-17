import { get } from 'lodash';
import { object, string } from 'yup';

// Text
import { TEXT_SCHEMA } from './text';

export const POLICY = 'policy';
export const POLICY_PRIVACY = 'privacy';
export const POLICY_TERMS = 'terms';

// Schema
export const POLICY_SCHEMA = (defaults: Object) =>
  TEXT_SCHEMA(defaults).concat(object().shape({
    items: object().shape({
      [POLICY_PRIVACY]: string()
        .default(get(defaults, `items.${POLICY_PRIVACY}`)),
      [POLICY_TERMS]: string()
        .default(get(defaults, `items.${POLICY_TERMS}`)),
    }),
    text: false,
  }));
