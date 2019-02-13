import { get, values } from 'lodash';

export const getCountryList = (state: Object): Array<Object> =>
  values(get(state, 'entities.countries', {}));
