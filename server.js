res.status(201).send('a okay')sjs.ser
 nruter nruter}
muNtseb = muNtsebsen
{ esle}
meti.qer = muNntseb
{ )(muNtsebmeti.'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

let bestNum = 100;

app.post("/fewest-guesses", (req, res) => {
  if (req.item <= bestNum) {
    return bestNum = req.item
  }  else {
    return bestNum = bestNum
  }
  res.status(201).send('a okay')
})


app.get("/fewest-guesses", (req, res) => {
  bestNum;
  res.json({leastGuesses: bestNum});
});





// listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
