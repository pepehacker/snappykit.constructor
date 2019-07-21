import { object } from 'yup';

// Text
import { TEXT_SCHEMA } from './text';

export const POLICY = 'policy';

// Schema
export const POLICY_SCHEMA = (defaults: Object) =>
  TEXT_SCHEMA(defaults).concat(
    object().shape({
      text: false,
    }),
  );
