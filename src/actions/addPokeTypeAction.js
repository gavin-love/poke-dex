export const addPokeTypeAction = (pokeType) => {
  console.log(pokeType)
  return {
    type: "ADD_POKE_TYPE",
    pokeType: pokeType
  }
} 
