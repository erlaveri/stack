const mongoose = require('mongoose');

const TermSchema = mongoose.Schema({
  name: String
});

const Item = mongoose.model('Term', TermSchema);

module.exports = { Item };