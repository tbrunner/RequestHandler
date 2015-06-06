var mongoose = require('mongoose');

var IdeaSchema = new mongoose.Schema({
  description: String,
  details: String,
  votes: {type: Number, default: 0},
});

IdeaSchema.methods.upvote = function(cb) {
  this.votes += 1;
  this.save(cb);
};

mongoose.model('Idea', IdeaSchema);