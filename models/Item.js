let mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    title: String,
    image: String,
    description: String,
    location: String,
    price: String,
    catagory: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', itemSchema);