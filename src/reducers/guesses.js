import * as actions from '../actions/index';

const initialState =  {
  guessCount: 0,
  oldGuesses: [],
  eachGuess: []
}

const guesses = (state=initialState, action) => {
  switch (action.type) {
    case 'STORE_GUESSES':
    const addGuess = action.oldGuesses;
    const array = state.oldGuesses;
    const eachGuessArray = [];
    const newGuessList = array.concat(addGuess);
    for (var i = 0; i < newGuessList.length; i++) {
      eachGuessArray.concat(newGuessList[i] + ' ')
    }
    return {
      ...state,
      eachGuess: eachGuessArray,
      guessCount: state.guessCount + 1
    }

    case 'RESET_GAME':
    return {
      ...state,
      oldGuesses: [],
      guessCount:0
    }

    default:
    return state
  }
}

export default guesses
