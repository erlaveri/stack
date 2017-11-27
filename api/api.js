const express = require('express');
const router = express.Router();
const { Kitten } = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  const { text } = req.body;

  const silence = new Kitten({ name: 'Silence' });

  silence.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });

  console.log(silence.name);

  res.redirect('/');
});

module.exports = router;
