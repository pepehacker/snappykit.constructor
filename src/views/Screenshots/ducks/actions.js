import { SET_SCREENSHOTS } from './types';

export const setScreenshots = (screenshots: Array): Object => ({
  type: SET_SCREENSHOTS,
  screenshots
});
