const express = require('express');
const router = express.Router();

const _ = require('lodash');


router.route('/')
  .post(function (req, res) {
    let { data, type } = req.body;
    data = data.trim();
    data = data.replace(/[\u2013\u2014]/g, '-'); // It replaces all &ndash; (–) and &mdash; (—) symbols with simple dashes (-).
    data = data.split(/\n/); // data.split(/\n|\t/);
    data = _.groupBy(data, item => (item.match(/-/g) || []).length === 1);

    let normal = data['true'] || [];
    let ambiguous = data['false'] || [];

    normal = normal
      .map(initialStr => initialStr.split('-'))
      .map(item => ({
        1: item[0].trim().split(',').map(item => item.trim()),
        2: item[1].trim().split(',').map(item => item.trim()),
      }));

    res.send({normal, ambiguous});
  })
  .put(function (req, res) {
    const concept = new Term({ text1: ['kek'], text2: ['lolec'] });

    concept.save(function (err, note) {
      if (err) {
        return console.error(err);
      }
    });

    res.send('ok')
  })
  .get(async function (req, res) {
    const concepts = await Term.find().lean().exec();
    res.send(concepts);
  })
  .delete(async function (req, res, next) {
    res.send('hi2');
  });


module.exports = router;
