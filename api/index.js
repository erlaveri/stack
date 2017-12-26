const express = require('express');

const router = express.Router();

const conceptsRouter = require('./concepts');

router.all('/concepts', conceptsRouter);

module.exports = router;