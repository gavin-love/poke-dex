const pokeTypeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POKE_TYPE":
      return action.pokeType
    default:
      return state;
  }
};

export default pokeTypeReducer;








