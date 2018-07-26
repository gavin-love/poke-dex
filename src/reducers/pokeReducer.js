const pokeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POKE":
      return action.poke
    default:
      return state;
  }
};

export default pokeReducer;
