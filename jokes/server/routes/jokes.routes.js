//1. import my controller
const jokesController = require('../controllers/jokes.controllers.js');


// 2. define your routes
module.exports = (app) => {
    app.get('/api/test', jokesController.test)
    app.get('/api/jokes', jokesController.getAllJokes)
    app.get('/api/jokes/random', jokesController.randomJoke)
    app.get('/api/jokes/:id', jokesController.getJoke)
    app.post('/api/jokes', jokesController.createJoke)
    app.put('/api/jokes/:id', jokesController.updateJoke)
    app.delete('/api/jokes/:id', jokesController.deleteJoke)
}