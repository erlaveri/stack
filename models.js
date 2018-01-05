const mongoose = require('mongoose');

const conceptSchema = mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId, auto: true },
  name: String,
  type: String,
});

const Concept = mongoose.model('Note', conceptSchema);

module.exports = { Concept };