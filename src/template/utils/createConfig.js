// @flow
import { set } from 'lodash';

// Config
import {
  // Background
  BACKGROUND,
  BACKGROUND_SCHEMA,
  // Icon
  ICON,
  ICON_SCHEMA,
  // POLICY
  POLICY,
  POLICY_SCHEMA,
  // Screenshots
  SCREENSHOTS,
  SCREENSHOTS_SCHEMA,
  // Smartphone
  SMARTPHONE,
  SMARTPHONE_SCHEMA,
  // Social
  SOCIAL,
  SOCIAL_SCHEMA,
  // Store
  STORE,
  STORE_SCHEMA,
  // Text
  TEXT,
  TEXT_SCHEMA,
  // Common
  TITLE
} from '../config';

type ConfigType = {
  id: number | string,
  data: Object,
  exports: Array<'string'>,
  type: string
};

export default (id: number, sections: Array<ConfigType> = []): Object => {
  let hasTitle = false;

  const ALLOW_TYPES = [
    BACKGROUND,
    ICON,
    POLICY,
    SCREENSHOTS,
    SMARTPHONE,
    SOCIAL,
    STORE,
    TEXT
  ];
  const section = {};

  sections.forEach(({ id, data, exports = [], link, type }) => {
    let schema;

    // Check type allow
    if (ALLOW_TYPES.indexOf(type) === -1) {
      throw new Error(`The section type "${type}" is not supporting!`);
    }

    // Check title exists
    if (id === TITLE) {
      hasTitle = true;
    }

    switch (type) {
      case BACKGROUND:
        schema = BACKGROUND_SCHEMA(data);
        break;
      case ICON:
        schema = ICON_SCHEMA(data);
        break;
      case POLICY:
        schema = POLICY_SCHEMA(data);
        break;
      case SCREENSHOTS:
        schema = SCREENSHOTS_SCHEMA(data);
        break;
      case SMARTPHONE:
        schema = SMARTPHONE_SCHEMA(data);
        break;
      case SOCIAL:
        schema = SOCIAL_SCHEMA(data);
        break;
      case STORE:
        schema = STORE_SCHEMA(data);
        break;
      case TEXT:
      default:
        schema = TEXT_SCHEMA(data);
    }

    set(section, `${id}`, {
      id,
      data,
      exports,
      link,
      schema,
      type
    });
  });

  if (!hasTitle) {
    throw new Error('The section "title" is required!');
  }

  return {
    id,
    section
  };
};
