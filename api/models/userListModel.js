'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
    
  },
  phone_no: {
      type: String,
     }
});

module.exports = mongoose.model('Users', UserSchema);