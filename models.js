const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  name: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = { Note };