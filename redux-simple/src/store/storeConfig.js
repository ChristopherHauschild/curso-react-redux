import { createStore, combineReducers } from 'redux'

import numbersReducer from './reducers/numbers'

// reducers -> responsáveis para gerar estado
const reducers = combineReducers({
  numbers: numbersReducer
})

// quando chamada, cria o estado
function storeConfig() {
  return createStore(reducers)
}

export default storeConfig