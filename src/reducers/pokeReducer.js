const pokeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_Poke":
      return action
    default:
      return state;
  }
};

export default pokeReducer;
