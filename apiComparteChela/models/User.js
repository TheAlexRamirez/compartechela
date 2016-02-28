var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema,
  SALT_WORK_FACTOR = 10;

var User = new Schema({

  name: {
    type: String
  },

  email: {
    required: true,
    unique: true,
    type: String
  },

  birthDate: {
    type: Date
  },

  password: {
    type: String,
    required: true
  },

  friends: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  phone: {
    required: true,
    type: String
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date
  },

}, {
  collectionName: 'users'
});

User.statics.findByIdAndUpdate = function(query, data, next) {
  this.findById(query, function(err, user) {
    user.update(data, next);
  });
};

User.methods.update = function(data, next) {
  this.set(data);
  this.save(next);
}

User.pre('save', function(next) {
  var me =  this;
  me.updated_at = Date.now();
  
  if (me.isModified('password')) {
    var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    var hash = bcrypt.hashSync(me.password, salt);
    me.password = hash;
  };

  next();
});

User.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password) ? true : false;
}

module.exports = mongoose.model('User', User);