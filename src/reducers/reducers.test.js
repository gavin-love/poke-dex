import pokeRuducer from '../reducers/pokeReducer';
import pokeTypeReducer from '../reducers/pokeTypeReducer'

describe('reducers', () => {
  describe('pokeReducer', () => {
    it('should return the initial state', () => {
      const expected = {};

      const result = pokeRuducer(undefined, {});

      expect(result).toEqual(expected)
    })
  })
  describe('pokeTypeReducer', () => {
    it('should return the initial state', () => {
      const expected = [];

      const result = pokeTypeReducer(undefined, {});

      expect(result).toEqual(expected)
    })
  })
})