const Joke = require('../models/Jokes');

module.exports.test = (req, res) => {
    res.json("test function is working")
}


// create a new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(error => res.status(400).json(error))
}
// read all jokes
module.exports.getAllJokes = (req, res) => {
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(error => res.json(error))
}

// read a single joke
module.exports.getJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(joke => res.json(joke))
    .catch(error => res.json(error))
}
// update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(joke => res.json(joke))
    .catch(error => res.json(error))
}   

// delete a joke
module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({_id: req.params.id})
    .then(joke => res.json(joke))
    .catch(error => res.status(200).json(error))
}

// get a random joke
// module.exports.randomJoke = (req, res) => {
//     Joke.findOne(req.params.id)
//     .then(joke => res.json(joke))
//     .catch(error => res.json(error))
// }