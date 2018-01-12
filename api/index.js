const express = require('express');
const router = express.Router();

module.exports = router.use('/concepts', require('./concepts'));