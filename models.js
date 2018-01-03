const mongoose = require('mongoose');

const conceptSchema = mongoose.Schema({
  name: String
});

const Concept = mongoose.model('Note', conceptSchema);

module.exports = { Concept };