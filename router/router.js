var user = require('../controllers/user-controller.js')
module.exports = function(app) {
	app.get('/api/test', user.test);
	app.get('/api/userInfo/:game/:username', user.getUserInfo);
}