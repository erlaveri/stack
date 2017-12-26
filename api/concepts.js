const express = require('express');
const router = express.Router();
const { Concept } = require('../models');


router.all('*', function (req, res, next) {
  res.send('respond with a xxxx');

  const note = new Concept(req.body);

  note.save(function (err, note) {
    if (err) {
      return console.error(err);
    }
  });


  Concept.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });

});


module.exports = router;
