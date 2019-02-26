import { get, keys, set } from 'lodash';

export default (data: Object, config: Object, callback: func): Object => {
  const newData = {};
  const section = get(config, 'section');

  keys(section).forEach((sectionId: string): void => {
    const schema = get(section, `${sectionId}.schema`);

    const field = get(data, sectionId);
    const fieldData = field
      ? (callback && callback(sectionId, field)) ||
        typeof field === 'string'
          // eslint-disable-next-line
          ? new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})').test(field)
            ? { src: field }
            : { text: field }
          : field instanceof Array
            ? { items: field }
            : field
      : {};

    set(newData, `section.${sectionId}`, schema.cast(fieldData));
  });

  return newData;
};

