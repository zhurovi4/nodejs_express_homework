const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var newsSchema = new Schema({
    content: 'String',
    user: Schema.ObjectId
})

mongoose.model('users', newsSchema)