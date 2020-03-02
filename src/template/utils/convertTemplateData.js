import { get, keys, merge, set } from 'lodash';

export default (data: Object, config: Object): Object => {
  const templateData = {};

  if (config && data) {
    keys(get(config, 'section', {})).forEach(
      (sectionId: number | string): void => {
        const link = get(config, `section.${sectionId}.link`);

        const defaultData = link
          ? get(data, `section.${link}`)
          : get(config, `section.${sectionId}.data`);

        const schema = get(config, `section.${sectionId}.schema`);

        schema &&
          set(
            templateData,
            `section.${sectionId}`,
            schema.cast(get(data, `section.${sectionId}`, defaultData)),
          );
      },
    );
  }

  return merge(templateData, data);
};
