const mongoose = require('mongoose');

const TypeSchema = mongoose.Schema({
  name: String
});

const Item = mongoose.model('Type', TypeSchema);

module.exports = { Item };