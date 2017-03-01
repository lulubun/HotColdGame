const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fewestGuesses = require('./models');

app.use(express.static('public'));


app.put("/fewest-guesses", jsonParser, (req, res) => {
  res.json(fewestGuesses.update(req.body.newBestGuess));
})

app.get("/fewest-guesses", (req, res) => {
  res.json(fewestGuesses.get());
});

// listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
