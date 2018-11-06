import {
  SET_SCREENSHOTS,
} from './types';

const initialState = {
  items: [
    { id: 1, title: 'Nature', image: 'https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg' },
    { id: 2, title: 'Paris', image: 'https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg' },
    { id: 3, title: 'Road', image: 'https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg' },
  ],
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    case SET_SCREENSHOTS:
      return { ...state, items: action.screenshots };

    default:
      return state;
  }
};
