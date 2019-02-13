import { get } from 'lodash';

export const getSearchView = (state: Object): Object =>
  get(state, 'views.search', {});
