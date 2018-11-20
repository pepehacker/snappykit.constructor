const initialState = {
  items: [
    { id: 'classic-iphone-silver', title: 'Classic iPhone silver', model: 'iphone', style: 'classic' },
    { id: 'classic-iphone-gray',   title: 'Classic iPhone gray',   model: 'iphone', style: 'classic' },
    { id: 'classic-iphone-gold',   title: 'Classic iPhone gold',   model: 'iphone', style: 'classic' },

    { id: 'concept-iphone-silver-glass', title: 'Concept iPhone silver glass', model: 'iphone', style: 'concept' },
    { id: 'concept-iphone-silver-line',  title: 'Concept iPhone silver line',  model: 'iphone', style: 'concept' },
    { id: 'concept-iphone-gray-glass',   title: 'Concept iPhone gray glass',   model: 'iphone', style: 'concept' },
    { id: 'concept-iphone-gray-line',    title: 'Concept iPhone gray line',    model: 'iphone', style: 'concept' },
    { id: 'concept-iphone-gold-glass',   title: 'Concept iPhone gold glass',   model: 'iphone', style: 'concept' },
    { id: 'concept-iphone-gold-line',    title: 'Concept iPhone gold line',    model: 'iphone', style: 'concept' },

    { id: 'flat-iphone-silver', title: 'Flat iPhone silver', model: 'iphone', style: 'flat' },
    { id: 'flat-iphone-gray',   title: 'Flat iPhone gray',   model: 'iphone', style: 'flat' },
    { id: 'flat-iphone-gold',   title: 'Flat iPhone gold',   model: 'iphone', style: 'flat' },
  ],
};

export default (state = initialState, action: Object) => {
  switch (action.type) {
    default:
      return state;
  }
}
