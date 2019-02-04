const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: 'String'
})

mongoose.model('users', usersSchema)