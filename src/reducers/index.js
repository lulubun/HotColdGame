//store user's guesses - not needed b/c action is triggered
//reducers

import * as actions from '../actions/index';

const initialState = {
  guessCount: 0,
  tempText: 'Make Your Guess!',
  answer: 0,
  oldGuesses: []
};

export const quizReducer = (state=initialState, action) => {
      switch (action.type) {
        case actions.GENERATE_NUMBER:
        ///spread operator is the ..., copies the previous thing
        return {...state, answer: Math.floor(Math.random() * 100) + 1 }

        case actions.STORE_GUESSES:
        return {...state, oldGuesses:action.oldGuesses, guessCount: state.guessCount++}

        case actions.DISPLAY_TEMP:
        return {...state, temp: action.temp}

        case actions.RESET_GAME:
        return {...state,
          guessCount: 0,
          tempText: 'Make Your Guess!',
          answer: Math.floor(Math.random() * 100) + 1 ,
          oldGuesses: []
        }

        default:
        return state
      }
};
