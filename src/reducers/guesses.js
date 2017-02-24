import * as actions from '../actions/index';

const initialState =  {
  guessCount: 0,
  oldGuesses: [],
  fewestGuesses:0
}

const guesses = (state=initialState, action) => {
  switch (action.type) {
    case 'STORE_GUESSES':
    const addGuess = action.oldGuesses;
    const array = state.oldGuesses;
    const nextStep = array.concat(addGuess);
    function makeNewArray(item) {
      var oneGuess = [item] + ' ';
      return oneGuess
    }
    const newGuessList = nextStep.map(makeNewArray);
    return {
      ...state,
      oldGuesses: newGuessList,
      guessCount: state.guessCount + 1
    }

    case 'RESET_GAME':
    return {
      ...state,
      oldGuesses: [],
      guessCount:0,
      fewestGuesses: state.fewestGuesses
    }

    case 'FETCH_GUESSCOUNT':
    const newBestNum = action.fewestGuesses;
    return {
      ...state,
      fewestGuesses: newBestNum
    };

    default:
    return state
  }
}

export default guesses
