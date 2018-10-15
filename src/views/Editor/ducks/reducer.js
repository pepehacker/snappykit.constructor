import {
  SET_CURRENT_DEVICE,
  MOBILE_DEVICE_ID,
} from './types';

const initialState = {
  currentDevice: MOBILE_DEVICE_ID,
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    case SET_CURRENT_DEVICE:
      return {
        ...state,
        currentDevice: action.deviceId,
      };
    default:
      return state;
  }
};
