const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  name: String
});

const Concept = mongoose.model('Note', noteSchema);

module.exports = { Concept };