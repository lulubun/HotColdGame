let leastGuesses = 100;

const fewestGuesses = {

  get: function() {
    return leastGuesses;
  },

  update: function(bestGuessUpdate) {
    return leastGuesses = bestGuessUpdate
  }
};

module.exports = fewestGuesses;
