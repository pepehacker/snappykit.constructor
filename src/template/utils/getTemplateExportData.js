import { get, keys, merge, set, unset } from 'lodash';

export default (data: Object, config: Object, force: boolean): Object => {
  const result: Object = {};
  const section: Object = get(config, 'section');
  const websiteData = { ...data };

  if (data && section) {
    keys(section).forEach((sectionId: number | string): void => {
      const exportedFields = get(section, `${sectionId}.exports`, []);

      if (exportedFields && exportedFields.length > 0) {
        const exportedData = {};

        exportedFields.forEach((fieldId: number | string) => {
          set(
            exportedData,
            fieldId,
            get(data, `section.${sectionId}.${fieldId}`)
          );
        });

        set(result, `section.${sectionId}`, exportedData);
      }

      unset(websiteData, `section.${sectionId}`);
    });
  }

  return force ? result : merge(result, websiteData);
};
