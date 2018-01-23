const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  content: String
});

mongoose.model('Post', PostSchema);
