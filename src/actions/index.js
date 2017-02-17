export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const genNumber = answer => ({
    type: GENERATE_NUMBER,
    answer
});

export const STORE_GUESSES = 'STORE_GUESSES';
export const storeGuesses = oldGuesses => ({
  type: STORE_GUESSES,
  oldGuesses
})

export const DISPLAY_TEMP = 'DISPLAY_TEMP';
export const displayTemp = tempText => ({
  type: DISPLAY_TEMP,
  tempText
})

export const RESET_GAME = 'RESET_GAME';
export const newGame = () => ({
  type: RESET_GAME
});
