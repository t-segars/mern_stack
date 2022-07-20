const mongoose = require('mongoose');

//define our schema
const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        // validations
        minLength: [5, 'Setup joke must be at least 5 characters long'],
    },
    punchline:{
        type: String,
         // validations
        minLength: [5, 'Punch line must be at least 5 characters long'],
    },
//   createdAt/updatedAt
}, {timestamps: true});



//register our schema

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;