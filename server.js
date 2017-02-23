'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/fewest-guesses", (req, res) => {
  bestNum;
  res.json({leastGuesses: bestNum});
});

app.post("/fewest-guesses", (req, res) => {

})



// listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
