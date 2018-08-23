const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {

  const query = db.createQuery('visit').order('timestamp', { descending: true }).limit(10);

  const ff = db.runQuery(query)
    .then((results) => {
      const entities = results[0];
      return entities.map((entity) => `Time: ${entity.timestamp}, AddrHash: ${entity.userIp}`);
    });
  console.log(ff);

  res.render('index', { title: 'Express' });
});

module.exports = router;
