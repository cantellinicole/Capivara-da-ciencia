var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    headline: String,
    url: String,
    shares: Number,
});

module.exports = NewsSchema;