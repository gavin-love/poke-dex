export const addPokeAction = (poke) => {
  console.log(poke)
  return {
    type: "ADD_POKE",
    poke: poke
  }
} 