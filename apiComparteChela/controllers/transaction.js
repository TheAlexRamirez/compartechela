var conekta = require('conekta');
var Transaction = require('../models/Transaction');
var User = require('../models/User');
var Beer = require('../models/Beer');
var async = require('async');
var notification = require('../helpers/notifications');
conekta.api_key = "key_phZJt4iruAhEsfX4ZuVV3A";

module.exports = {
	show: function (req, res) {
		if (!req.query.email) {
			return res.status(400).send({
				ok:false
			});
		}
		User.findOne(req.query, function (err, user) {
			if (err) {
				return res.status(200).send(err);
			}
			res.status(200).send(user);
		});
	},
	create: function(req, res) {
		if (!req.body.order) {
			return res.status(400).send({
				ok:false
			});
		}
		var amount = 0;
		async.each(req.body.order, function (beer, callback) {
			var beerId = beer.beer;
			Beer.findById(beerId, function (errBeer, beerSelected) {
				if (!beerSelected || errBeer) {
					callback();
					return;
				}
				amount += beer.quantity * beerSelected.price;
				callback();
			});
		}, function (err) {
			paidJson.amount = amount;
			paidJson.description = "Beers";

			conekta.Charge.create(paidJson, function(err, resi) {
				if (err) {
					return res.status(200).send(err);
				}
				var setTransaccion = {
					status: 'paid',
					order: req.body.order,
					total: amount,
					paidInfo: resi,
					sender: req.body.sender,
					receiver: req.body.receiver
				}
				Transaction.create(setTransaccion, function (err, saved) {
					if (err) {
						return res.status(200).send(err);
					}
					notification.send({}, function (err, resp) {
						res.status(200).send(saved);
					});
				});
			});
		});
	}
}

var paidJson = {
		  "description":"Stogies",
		  "amount": 20000,
		  "currency":"MXN",
		  "reference_id":"9839-wolf_pack",
		  "card": "tok_test_visa_4242",
		  "details": {
		    "name": "Arnulfo Quimare",
		    "phone": "403-342-0642",
		    "email": "logan@x-men.org",
		    "customer": {
		      "logged_in": true,
		      "successful_purchases": 14,
		      "created_at": 1379784950,
		      "updated_at": 1379784950,
		      "offline_payments": 4,
		      "score": 9
		    },
		    "line_items": [{
		      "name": "Box of Cohiba S1s",
		      "description": "Imported From Mex.",
		      "unit_price": 20000,
		      "quantity": 1,
		      "sku": "cohb_s1",
		      "category": "food"
		    }],
		    "billing_address": {
		      "street1":"77 Mystery Lane",
		      "street2": "Suite 124",
		      "street3": null,
		      "city": "Darlington",
		      "state":"NJ",
		      "zip": "10192",
		      "country": "Mexico",
		      "tax_id": "xmn671212drx",
		      "company_name":"X-Men Inc.",
		      "phone": "77-777-7777",
		      "email": "purshasing@x-men.org"
		    }
		  }
		}