const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/products', {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongoose DB Status: RUNNING'))
    .catch(err => console.log('Something went wrong when connecting to MongoDB', err));
