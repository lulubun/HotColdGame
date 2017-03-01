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

export const FETCH_GUESSCOUNT = 'FETCH_GUESSCOUNT';
export const fetchGuessCount = (fewestGuesses) => ({
    type: FETCH_GUESSCOUNT,
    fewestGuesses
});

export function fetchBestGuessCount() {
  return dispatch => {
    const url = 'http://localhost:8080/fewest-guesses';
    fetch(url)
    .then(response => response.json())
    .then(data => dispatch(fetchGuessCount(data)))
    .catch(ex =>  console.log(ex))
  }
};

export function sendBestGuessCount(newBestGuess) {
  return dispatch => {
    const url = 'http://localhost:8080/fewest-guesses';
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newBestGuess
      })
    })
    .then(response => response.json())
    .then(data => dispatch(fetchGuessCount(data)))
    .then(dispatch(newGame()))
  }
};
