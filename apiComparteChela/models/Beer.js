var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Beer = new Schema({
	name : String,
	url: String,
	price: Number,
	description: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
}, {
	collection: 'beer'
});

Beer.pre('save', function(next) {
	this.updatedAt = new Date();
	next();
});

Beer.methods.update = function(content, next) {
	this.set(content);
	this.save(next);
};

module.exports = mongoose.model('Beer', Beer);