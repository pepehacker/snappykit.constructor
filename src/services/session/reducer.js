import {
  SET_USER,
} from './types';

const initialState = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbnlhMDk1QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidmFueWEwOTVAZ21haWwuY29tIiwiZXhwIjoxNTQ1OTAxODAwLCJ1c2VyX2lkIjoyMDM2fQ.-XtWK2DieKLWTWJNjazh5_sFlnk_n5KmkL9tvDar3Ms',
  user: null,
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
