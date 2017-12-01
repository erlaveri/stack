const express = require('express');
const router = express.Router();
const { Note } = require('../models');


router.all('*', function (req, res, next) {
    res.send('respond with a xxxx');

    const silence = new Note(req.body);
});


module.exports = router;
