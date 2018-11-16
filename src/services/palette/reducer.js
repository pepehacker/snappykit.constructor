const initialState = {
  items: [
    '#c7ccd8', '#b3b3b3', '#808385', '#484b4d',
    '#2a2b2d', '#000000', '#986ce5', '#8245ed',
    '#6112ef',
  ],
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    default:
      return state;
  }
};
