var home = require('./controllers/Home');
var beers = require('./controllers/beers');
var transactions = require('./controllers/transaction');
var users = require('./controllers/users');
var notifications = require('./controllers/notifications');

module.exports = function(app) {

	app.get('/', home.index);

	// beers
	app.get('/v1/beers', beers.show);
	app.post('/v1/beers', beers.create);

	//transactions
	app.get('/v1/transactions', transactions.show);
	app.post('/v1/transactions', transactions.create);

	//users
	app.get('/v1/users', users.show);
	app.post('/v1/users', users.create);
	app.put('/v1/users', users.update);

	//notification
	app.post('/v1/sms', notifications.sms);
}