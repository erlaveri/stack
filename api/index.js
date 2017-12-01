const express = require('express');

const router = express.Router();

const notesRouter = require('./notes');

router.all('/notes', notesRouter);

module.exports = router;