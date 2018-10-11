import {
  SET_CURRENT_DEVICE,
} from './types';

export const setCurrentDevice = (deviceId: string): Object =>
  ({ type: SET_CURRENT_DEVICE, deviceId });
