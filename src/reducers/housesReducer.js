const housesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOUSES':
      return [...state, ...action.houses];
    default:
      return state;
  }
}