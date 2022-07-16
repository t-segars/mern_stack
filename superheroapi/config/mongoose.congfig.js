
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/superhero_db', {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Something went wrong when connecting to MongoDB', err));

