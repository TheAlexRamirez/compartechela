var accountSid = 'AC23a67f93e381472b71646978d45286cb'; 
var authToken = 'd932459b2839438fbea4acf189c5d47f'; 
var client = require('twilio')(accountSid, authToken); 

var notification = module.exports;

notification.send = function (params, next) {
	var phone = '+521' + params.phone || "9993519064";
	var message = params.message || "te han compartido unas chelas";
	client.messages.create({ 
		to: phone, 
		from: "+525549998570", 
		body: message,   
	}, function(err, message) { 
		if (next != undefined) next(err, message);
	});
}