const express = require('express');
const router = express.Router();
const { Concept } = require('../models');


router.post('*', function (req, res, next) {
  res.send('respond with a xxxx');

  const concept = new Concept(req.body);

  console.log(req.body);


  // concept.save(function (err, note) {
  //   if (err) {
  //     return console.error(err);
  //   }
  // });
  //
  //
  // Concept.find(function (err, kittens) {
  //   if (err) return console.error(err);
  //   console.log(kittens);
  // });

});

router.get('*', async function (req, res, next) {
  const concepts = await Concept.find().lean().exec();
  res.send(concepts);
});

router.delete('*', async function (req, res, next) {
  const ll = await Concept.remove({ _id: req.body.id }).exec();
  res.send('hi2');
});


module.exports = router;
