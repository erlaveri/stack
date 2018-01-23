const express = require('express');
const router = express.Router();

const _ = require('lodash');
const { Term } = require('../models');


router.route('/')
  .get(async function (req, res) {
    const concepts = await Type.find().lean().exec();
    res.send(concepts);
  })
;


module.exports = router;
