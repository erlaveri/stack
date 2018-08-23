const mongoose = require('mongoose');
const utils = require('../utils');

// const NoteSchema = mongoose.Schema();
// NoteSchema.add({
//   title: String,
//   type: String,
//   data: String,
//   // parts: [NoteSchema],
// });

const NoteSchema = mongoose.Schema({
  title: String,
  type: String,
  data: String,
  // parts: [NoteSchema],
}, utils.getDefaultSchemaOptions());

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
