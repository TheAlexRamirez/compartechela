var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Multimedia = new Schema({
	url: String
}, {
	collection: 'multimedia'
});

Multimedia.pre('save', function(next) {
	this.updatedAt = new Date();
	next();
});

Multimedia.methods.update = function(content, next) {
	this.set(content);
	this.save(next);
};

module.exports = mongoose.model('Multimedia', Multimedia);