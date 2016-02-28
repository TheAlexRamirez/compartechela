var Beer = require('../models/Beer');

module.exports = {
	show: function(req, res) {
		Beer.find({}, function (err, beers) {
			if (err) {
				console.log(err);
				return res.status(400).send({ok:false});
			}
			res.status(200).send({
				no_items: beers.length,
				beers: beers
			})
		});
	},
	create: function(req, res) {
		if (!req.body.name || !req.body.url || !req.body.price || !req.body.description) {
			return res.status(400).send({ok:false, beer: {}});
		}
		Beer.create(req.body, function (err, saved) {
			res.status(200).send({ok:true, beer: saved});
		});
	}
}