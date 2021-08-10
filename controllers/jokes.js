const { getJokes } = require("../models/joke");
const rescue = require('express-rescue');


const listJokes = rescue(async (_req, res) => {
  const joke = await getJokes();
  console.log(joke)
  return res.render('jokeView.ejs', { joke });
})

module.exports = { listJokes };