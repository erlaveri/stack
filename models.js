const mongoose = require('mongoose');

const conceptSchema = mongoose.Schema({
  text1: [String],
  text2: [String],
});

const Concept = mongoose.model('Note', conceptSchema);

module.exports = { Term: Concept };