
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/jokes_db', {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB => Connected'))
    .catch(err => console.log('MongoDB => Failed to Connect', err));

