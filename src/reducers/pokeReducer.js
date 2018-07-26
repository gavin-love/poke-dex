const pokeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POKE":
      return action.pokes
    default:
      return state;
  }
};

export default pokeReducer;
