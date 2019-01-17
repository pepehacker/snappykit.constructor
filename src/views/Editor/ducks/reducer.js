// Entities
import { VIEW } from 'entities/template/constants';

// Types
import {
  SET_CURRENT_DEVICE,
} from './types';

const initialState = {
  currentDevice: VIEW.DESKTOP,
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
