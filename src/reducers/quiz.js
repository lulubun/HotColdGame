//store user's guesses - not needed b/c action is triggered
//reducers

import * as actions from '../actions/index';

const initialState = {
  guessCount: 0,
  tempText: 'Make Your Guess!',
  answer: 0,
  oldGuesses: []
};

const quiz = (state=initialState, action) => {
      switch (action.type) {
        case actions.GENERATE_NUMBER:
        ///spread operator is the ..., copies the previous thing
        return {...state, answer: Math.floor(Math.random() * 100) + 1 }

        case actions.DISPLAY_TEMP:
        return {...state, tempText: action.tempText}

        case actions.RESET_GAME:
        return {...state,
          guessCount: 0,
          tempText: 'You won! Play Again:',
          answer: Math.floor(Math.random() * 100) + 1 ,
          oldGuesses: []
        }

        default:
        return state
      }
};

export default quiz
