import { get, keys, merge, set } from 'lodash';

export default (data: Object, config: Object): Object => {
  const templateData = {};

  if (config && data) {
    keys(get(config, 'section', {})).forEach((sectionId: number|string): void => {
      const schema = get(config, `section.${sectionId}.schema`);

      schema &&
      set(templateData, `section.${sectionId}`, schema.cast(get(data, `section.${sectionId}`)));
    });
  }

  return merge(templateData, data);
};
