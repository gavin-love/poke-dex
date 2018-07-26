import { combineReducers } from 'redux'
import pokeReducer from './pokeReducer';
import pokeTypeReducer from './pokeTypeReducer'

const rootReducer = combineReducers({
  pokeType: pokeTypeReducer,
  poke: pokeReducer
})

export default rootReducer
