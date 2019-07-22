import { object } from 'yup';

// Text
import { TEXT_SCHEMA } from './text';

export const POLICY = 'policy';
export const POLICY_PRIVACY = 'privacy';
export const POLICY_TERMS = 'terms';

// Schema
export const POLICY_SCHEMA = (defaults: Object) =>
  TEXT_SCHEMA(defaults).concat(
    object().shape({
      text: false,
    }),
  );
