var mongoose = require('mongoose');

//DB schema
var itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    picture: String,
    catagory: String,
    price: String,
    date: {
        type: Date,
        default: Date.now
    },
    location: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }]

});

module.exports = mongoose.model('Item', itemSchema);