import { SET_BUSY, SET_VIEW } from './types';

export const setBusy = (busy: boolean): func => ({ type: SET_BUSY, busy });

export const setView = (view: string): func => (dispatch: func): void => {
  dispatch({ type: SET_BUSY, busy: true });

  setTimeout(() => {
    dispatch({ type: SET_VIEW, view });
  }, 200);
};
