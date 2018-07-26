import { addPokeAction } from '../actions/addPokeAction'
import { addPokeTypeAction } from '../actions/addPokeTypeAction'

describe('actions', () => {
  describe('addPoke', () => {
    it('should have a type of ADD_POKE', () => {
      const pokes = [{}];

      const expectation = {
        type: 'ADD_POKE',
        poke: pokes
      }

      const result = addPokeAction(pokes)

      expect(result).toEqual(expectation)
    })
  })
  describe('addPokeType', () => {
    it('should have a type of ADD_POKE_TYPE', () => {
      const pokeTypes = [{}];

      const expectation = {
        type: 'ADD_POKE_TYPE',
        pokeType: pokeTypes
      }

      const result = addPokeTypeAction(pokeTypes);

      expect(result).toEqual(expectation)
    })
  })
})