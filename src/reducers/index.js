import {combineReducers} from 'redux'
import quiz from './quiz'
import guesses from './guesses'

const reducerCombiner = combineReducers({
  quiz,
  guesses
})

export default reducerCombiner
