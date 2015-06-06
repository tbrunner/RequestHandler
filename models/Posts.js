var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  description: String,
  details: String,
  votes: {type: Number, default: 0},
});

PostSchema.methods.upvote = function(cb) {
  this.votes += 1;
  this.save(cb);
};

mongoose.model('Post', PostSchema);