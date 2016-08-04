var user = require('../controllers/user-controller.js')
var hero = require('../controllers/hero-controller.js')
module.exports = function(app) {
	app.get('/api/test', user.test);
	app.get('/api/user/:game/:username', user.getUserInfo);
	app.get('/api/heros/:game/:hero/:id', hero.getUserData);
}
