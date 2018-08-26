var mongoose = require('mongoose');

var likeSchema = mongoose.Schema({
  like: Boolean,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  }
});

module.exports = mongoose.model('Like', likeSchema);
