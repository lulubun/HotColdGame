export const fetchBestGuessCount = fewestGuesses => dispatch => {
    const url = `localhost:8080`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(fetchBestGuessCount(data.fewestGuesses))
    )
    .catch(error =>
        dispatch(fetchBestGuessCount(fewestGuesses, error))
    );
};

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
