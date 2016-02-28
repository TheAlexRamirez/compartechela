var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Transaction = new Schema({
	status: {
		type: String,
		default: ['paid', 'cancel', 'delivery', 'in process', 'pending']
	},
	sender: String,
	receiver: {
		name: String,
		email: String,
		phone: String,
		user: {
			type: Schema.ObjectId,
			ref: 'User'
		}
	},
	order:[
		{
			quantity: Number,
			beer: {
				type: Schema.ObjectId,
				ref: 'Beer'
			}	
		}
	],
	total: Number,
	createdAt: {
		type: Date,
		default: Date.now
	},
	paidInfo: Schema.Types.Mixed,
	updatedAt: {
		type: Date,
		default: Date.now
	}
}, {
	collection: 'transactions'
});

Transaction.pre('save', function(next) {
	this.updatedAt = new Date();
	next();
});

Transaction.methods.update = function(content, next) {
	this.set(content);
	this.save(next);
};

module.exports = mongoose.model('Transaction', Transaction);