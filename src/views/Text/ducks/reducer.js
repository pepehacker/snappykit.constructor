const initialState = {
  styles: ['light', 'regular', 'medium', 'bold'],
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    default:
      return state;
  }
}
