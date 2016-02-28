var accountSid = 'AC23a67f93e381472b71646978d45286cb'; 
var authToken = 'd932459b2839438fbea4acf189c5d47f'; 
var client = require('twilio')(accountSid, authToken); 

module.exports = {

	sms: function (req, res) {
		var phone = '+521' + req.body.phone;
		var message = req.body.message || "te han compartido unas chelas";
		client.messages.create({ 
			to: phone, 
			from: "+525549998570", 
			body: message,   
		}, function(err, message) { 
			if (err) {
				return res.status(400).send({
					ok:false,
					message: err
				});
			}
			res.status(200).send({
				ok:true,
				message: "success"
			});
		});
	}
}