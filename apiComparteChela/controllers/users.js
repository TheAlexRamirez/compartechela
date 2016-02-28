var User = require('../models/User');

module.exports = {

	show: function (req, res) {
		User.findOne(req.query.email, function (err, user) {
			if (user.comparePassword(req.query.password)) {
				return res.status(200).send(user);
			}
				res.status(200).send({ok: false});
			
		});
	},

	create: function (req, res) {
		User.create(req.body, function (err, saved) {
			if (err) {
				return res.status(200).send({ok: false});
			}
			res.status(200).send(saved);
		});
	},

	update: function (req, res) {
		var userId = req.body.id;
		delete req.body.id;
		var dataToUpdate = req.body;

		User.findByIdAndUpdate(userId, req.body, function (err, saved) {
			if (err) {
				return res.status(200).send(err);
			}
			res.status(200).send(saved);
		});
	}
}