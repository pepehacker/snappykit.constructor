import { get } from 'lodash';

export const getResult = (state: Object): Array<Object> =>
  get(state, 'views.search.result', []);

export const getResultById = (state: Object, appId: string): Object => {
  const result = getResult(state);
  return result.filter(({ id }) => id === appId)[0];
}

export const getSearchView = (state: Object): Object =>
  get(state, 'views.search', {});
