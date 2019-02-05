const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {type: String, required: true},
    content: String,
    publishedAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model('PostData', postSchema)
