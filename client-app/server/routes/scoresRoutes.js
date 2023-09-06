const userScoreController = require('../controllers/userScoreController');

module.exports = (app) =>{
    
    app.post('/api/score/create', userScoreController.create)
}